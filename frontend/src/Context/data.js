import p1 from "../Components/Assets/p1.jpeg";
import p2 from "../Components/Assets/p2.jpeg";
import p3 from "../Components/Assets/p3.jpeg";
import p4 from "../Components/Assets/p4.jpeg";
import p5 from "../Components/Assets/p5.jpeg";
import p6 from "../Components/Assets/p6.jpeg";
import p7 from "../Components/Assets/p7.jpeg";
import p8 from "../Components/Assets/p8.jpeg";
import p9 from "../Components/Assets/p9.jpeg";
import p10 from "../Components/Assets/p10.jpeg";
import p11 from "../Components/Assets/p11.jpeg";
import p12 from "../Components/Assets/p12.jpeg";
import p13 from "../Components/Assets/p13.jpeg";
import p14 from "../Components/Assets/p14.jpeg";
import p15 from "../Components/Assets/p15.jpeg";
import p16 from "../Components/Assets/p16.jpeg";
import p17 from "../Components/Assets/p17.jpeg";
import p18 from "../Components/Assets/p18.jpeg";
import p19 from "../Components/Assets/p19.jpeg";
import p20 from "../Components/Assets/p20.jpeg";
import p21 from "../Components/Assets/p21.jpeg";
import p22 from "../Components/Assets/p22.jpeg";
import p23 from "../Components/Assets/p23.jpeg";
import p24 from "../Components/Assets/p24.jpeg";
import p25 from "../Components/Assets/p25.jpeg";
import p26 from "../Components/Assets/p26.jpeg";
import p27 from "../Components/Assets/p27.jpeg";

const all_product = [
  { id: 1, name: "Birthday Sprinkle Cake", category: "cake", image: p1, images: [p1, p1, p1, p1], new_price: 15000, old_price: 20000, description: "A colorful birthday cake topped with sweet sprinkles.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 2, name: "Peanut Butter Crunch", category: "cake", image: p2, images: [p2, p2, p2, p2], new_price: 15000, old_price: 20000, description: "Rich peanut butter cake with a crunchy texture.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 3, name: "Coconut Paradise Cake", category: "cake", image: p3, images: [p3, p3, p3, p3], new_price: 15000, old_price: 20000, description: "Soft coconut cake with creamy tropical flavor.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 4, name: "Chocolate Mint Magic", category: "cake", image: p4, images: [p4, p4, p4, p4], new_price: 15000, old_price: 20000, description: "Chocolate cake infused with refreshing mint.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 5, name: "Strawberry Cream Delight", category: "cake", image: p5, images: [p5, p5, p5, p5], new_price: 15000, old_price: 20000, description: "Strawberry cream cake with a smooth finish.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 6, name: "Vanilla Luxury Cake", category: "cake", image: p6, images: [p6, p6, p6, p6], new_price: 15000, old_price: 20000, description: "Premium vanilla cake with soft layers.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 13, name: "Pink Heart Cake", category: "cake", image: p13, images: [p13, p13, p13, p13], new_price: 15000, old_price: 20000, description: "Lovely pink heart shaped cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 14, name: "Black Velvet Cake", category: "cake", image: p14, images: [p14, p14, p14, p14], new_price: 18000, old_price: 23000, description: "Rich black velvet cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 15, name: "Gold Birthday Cake", category: "cake", image: p15, images: [p15, p15, p15, p15], new_price: 18000, old_price: 23000, description: "Elegant gold themed birthday cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 16, name: "Pink Roses Cake", category: "cake", image: p16, images: [p16, p16, p16, p16], new_price: 15000, old_price: 20000, description: "Beautiful pink roses cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 17, name: "Mini Birthday Cake", category: "cake", image: p17, images: [p17, p17, p17, p17], new_price: 12000, old_price: 16000, description: "Sweet mini birthday cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 18, name: "Cream Delight Cake", category: "cake", image: p18, images: [p18, p18, p18, p18], new_price: 15000, old_price: 20000, description: "Smooth cream delight cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 19, name: "Colorful Sprinkle Cake", category: "cake", image: p19, images: [p19, p19, p19, p19], new_price: 15000, old_price: 20000, description: "Fun colorful sprinkle cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 20, name: "Fancy Layer Cake", category: "cake", image: p20, images: [p20, p20, p20, p20], new_price: 18000, old_price: 23000, description: "Fancy layered cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 7, name: "Luxury Drip Design", category: "design", image: p7, images: [p7, p7, p7, p7], new_price: 24000, old_price: 30000, description: "Elegant drip cake with premium finish.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 8, name: "Floral Garden Cake", category: "design", image: p8, images: [p8, p8, p8, p8], new_price: 18000, old_price: 23000, description: "Beautiful floral themed cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 9, name: "Elegant Birthday Design", category: "design", image: p9, images: [p9, p9, p9, p9], new_price: 20000, old_price: 26000, description: "Stylish birthday cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 10, name: "Classic Wedding Design", category: "design", image: p10, images: [p10, p10, p10, p10], new_price: 26000, old_price: 32000, description: "Classic wedding cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 11, name: "Royal Gold Theme Cake", category: "design", image: p11, images: [p11, p11, p11, p11], new_price: 28000, old_price: 35000, description: "Royal gold themed cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 12, name: "Minimalist White Design", category: "design", image: p12, images: [p12, p12, p12, p12], new_price: 20000, old_price: 26000, description: "Clean minimalist cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 21, name: "Dark Chocolate Design", category: "design", image: p21, images: [p21, p21, p21, p21], new_price: 22000, old_price: 28000, description: "Rich dark chocolate design.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 22, name: "Chocolate Truffle Design", category: "design", image: p22, images: [p22, p22, p22, p22], new_price: 24000, old_price: 30000, description: "Luxury chocolate truffle cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 23, name: "White Elegance Design", category: "design", image: p23, images: [p23, p23, p23, p23], new_price: 26000, old_price: 32000, description: "Elegant white cake design.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 24, name: "Blue Ocean Design", category: "design", image: p24, images: [p24, p24, p24, p24], new_price: 22000, old_price: 28000, description: "Beautiful blue ocean themed cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 25, name: "Midnight Black Design", category: "design", image: p25, images: [p25, p25, p25, p25], new_price: 24000, old_price: 30000, description: "Stunning midnight black cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 26, name: "Drip Gold Design", category: "design", image: p26, images: [p26, p26, p26, p26], new_price: 28000, old_price: 35000, description: "Premium gold drip cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
  { id: 27, name: "Candle Glow Design", category: "design", image: p27, images: [p27, p27, p27, p27], new_price: 20000, old_price: 26000, description: "Beautiful candle glow cake.", rating: 5, sizes: ["Small", "Medium", "Large"] },
];

export const data_product = all_product.slice(0, 4);
export const new_collections = all_product.slice(4, 10);
export default all_product;