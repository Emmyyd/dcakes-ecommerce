const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors());

// ✅ DATABASE CONNECTION
mongoose.connect('mongodb+srv://Emmy:Emmydope2@cluster0.teylglq.mongodb.net/dcakes')
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.log('❌ DB Error:', err));

// ✅ API TEST
app.get('/', (req, res) => {
  res.send('Express App is Running');
});

// ✅ IMAGE STORAGE ENGINE
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

// ✅ SERVE IMAGES STATICALLY
app.use('/images', express.static('upload/images'));

// ✅ UPLOAD ENDPOINT
app.post('/upload', upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: 'No file uploaded' });
  }
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// ✅ PRODUCT SCHEMA
const Product = mongoose.model('Product', {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number },
  old_price: { type: Number },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true }
});

// ✅ ADD PRODUCT ENDPOINT
app.post('/addproduct', async (req, res) => {
  try {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    res.json({ success: true, name: req.body.name });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ DELETE PRODUCT ENDPOINT
app.post('/removeproduct', async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ GET ALL PRODUCTS ENDPOINT
app.get('/allproducts', async (req, res) => {
  try {
    let products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ USER SCHEMA
const Users = mongoose.model('Users', {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now }
});

// ✅ SIGNUP ENDPOINT
app.post('/signup', async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ success: false, errors: 'User already exists' });
    }

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      cartData: cart,
    });

    await user.save();

    const token = jwt.sign({ id: user.id }, 'secret_dcakes');
    res.json({ success: true, token });

  } catch (err) {
    res.status(500).json({ success: false, errors: err.message });
  }
});

// ✅ LOGIN ENDPOINT
app.post('/login', async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ success: false, errors: 'Wrong email address' });
    }

    // ✅ Compare hashed password
    const passMatch = await bcrypt.compare(req.body.password, user.password)
    if (!passMatch) {
      return res.json({ success: false, errors: 'Wrong password' });
    }

    const token = jwt.sign({ id: user.id }, 'secret_dcakes');
    res.json({ success: true, token });

  } catch (err) {
    res.status(500).json({ success: false, errors: err.message });
  }
});

// ✅ MIDDLEWARE - Verify Token
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token')
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token' })
  }
  try {
    const data = jwt.verify(token, 'secret_dcakes')
    req.user = data
    next()
  } catch (err) {
    res.status(401).json({ success: false, message: 'Invalid token' })
  }
}

// ✅ GET USER ENDPOINT
app.get('/getuser', fetchUser, async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select('-password')
    if (!user) {
      return res.json({ success: false, message: 'User not found' })
    }
    res.json({ success: true, user })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

// ✅ START SERVER
app.listen(port, () => {
  console.log('Server Running on Port ' + port);
});