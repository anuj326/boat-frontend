export type Product = {
  name: string;
  price: number;
  oldPrice: number;
  img: string;
};

// export const products:Product[] = [
//   // 🔒 TOP 4 — DO NOT CHANGE
//   { 
//     name: "boAt Nirvana Zenith Pro", 
//     price: 199, 
//     oldPrice: 2699, 
//     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/zenith_pro_LR.png?v=1751544158&width=200" 
//   },
//   { 
//     name: "boAt Airdopes Supreme", 
//     price: 99, 
//     oldPrice: 1299, 
//     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Supreme_1.jpg?v=1711262453&width=200" 
//   },
//   { 
//     name: "BoAt Airdopes 161", 
//     price: 99, 
//     oldPrice: 2490, 
//     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.png?v=1745235467&width=200" 
//   },
//   { 
//     name: "BoAt Airdopes Loop", 
//     price: 299, 
//     oldPrice: 7990, 
//     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lifestyle_1.png?v=1732173396&width=200" 
//   },

//   // 🔁 REPLACED PRODUCTS (NEW & DIFFERENT)
//   { 
//     name: "boAt Nirvana X TWS", 
//     price: 149, 
//     oldPrice: 2990, 
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/Airdopes_800_Packaging.19_600x.png?v=1737969938" 
//   },
//   { 
//     name: "boAt Airdopes 181 Pro", 
//     price: 129, 
//     oldPrice: 1199, 
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/Scene_05_Brown_600x.png?v=1717817077" 
//   },
//   { 
//     name: "boAt Airdopes 301", 
//     price: 119, 
//     oldPrice: 1499, 
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/1_04aa0daa-bb15-4ef7-8b2c-e25af15d365c_1080x.jpg?v=1727077946" 
//   },
//   { 
//     name: "boAt Airdopes Alpha", 
//     price: 99, 
//     oldPrice: 899, 
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1copy_1_600x.jpg?v=1742463712" 
//   }
// ];


// export const products2:Product[] = [
//   {
//     name: "boAt Airdopes 71",
//     price: 159,
//     oldPrice: 1799,
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a_600x.png?v=1698315950"
//   },
//   {
//     name: "boAt Airdopes Ultra Pro",
//     price: 139,
//     oldPrice: 1999,
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard11_9aa02dfc-4a85-4d1b-8d1d-e77efc33244c_600x.png?v=1736244182"
//   },
//   {
//     name: "boAt Airdopes 131 Pro Buds",
//     price: 119,
//     oldPrice: 1499,
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/ad_131_pro_buds_updated_packaging.11_600x.png?v=1726626453"
//   },
//   {
//     name: "boAt Nirvana Crystl",
//     price: 199,
//     oldPrice: 2199,
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/03_black_48173e5a-d41c-426e-b19c-660131c770a5_600x.png?v=1756452611"
//   },
//   {
//     name: "boAt Airdopes 190",
//     price: 149,
//     oldPrice: 1299,
//     img: "https://www.boat-lifestyle.com/cdn/shop/products/1_eebd7966-a481-44a9-91a2-bef06d4c0f05_600x.png?v=1663821109"
//   },
//   {
//     name: "boAt Immortal 201",
//     price: 199,
//     oldPrice: 2699,
//     img: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_41348716-4ce0-4bee-aecc-4f7d9b7cc7de_600x.png?v=1704781311"
//   },
//   {
//     name: "boAt Airdopes 411 ANC",
//     price: 1899,
//     oldPrice: 2499,
//     img: "https://www.boat-lifestyle.com/cdn/shop/products/Untitled-1_10ea9107-a7f3-4058-a83a-540548ecbf23_600x.png?v=1671049652"
//   },
//   {
//     name: "boAt Airdopes 131 DC Edition",
//     price: 129,
//     oldPrice: 1099,
//     img: "https://www.boat-lifestyle.com/cdn/shop/products/main-image-3_e05a4bee-499f-42da-8db5-e3921a185f5c_600x.png?v=1655526604"
//   }
// ];


export const products: Product[] = [
  {
   name: "Nike Go FlyEase Easy On/Off Shoes",
    price: 9695,
    oldPrice: 11995,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Slick Chicks Adaptive Wireless Zipper Bra",
    price: 3200,
    oldPrice: 4500,
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Slick Chicks Side Fastener Brief",
    price: 2100,
    oldPrice: 2800,
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80", // Placeholder for briefs/bottoms

  },
  {
    name: "Reboundwear 'The Molly' Adaptive Pants",
    price: 4500,
    oldPrice: 6200,
    img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Reboundwear 'Lindsey' Zipper Top",
    price: 3800,
    oldPrice: 5100,
    img: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tek Gear Adaptive Dry Tek Tee",
    price: 1800,
    oldPrice: 2999,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tek Gear Adaptive Performance Jacket",
    price: 2499,
    oldPrice: 3999,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTB-FlWFXBql6iDMYST8gsupQor3lkkWSlbw&s",
  },
  {
    name: "Tommy Hilfiger Adaptive Sweatshirt",
    price: 6500,
    oldPrice: 8999,
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
  }
];


export const products2: Product[] = [
  {
    name: "MagnaReady Seated Fit Pants",
    price: 5200,
    oldPrice: 7000,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Silverts Active Top (Back Overlap)",
    price: 3100,
    oldPrice: 4200,
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Silverts Recovery Side Snap Pants",
    price: 3400,
    oldPrice: 4800,
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "IZ Adaptive Seamless Back Pants",
    price: 5800,
    oldPrice: 7500,
    img: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "SuperFit Hero Pocket Leggings (L-7X)",
    price: 6800,
    oldPrice: 8500,
    img: "https://cdn.shopify.com/s/files/1/0022/4008/6074/files/VW490LFB_FA25_W_ECOMM_BOTTOMS_SIDE_4.jpg?v=1752531326",
  },
  {
    name: "Adidas Adaptive Sportswear Collection",
    price: 3500,
    oldPrice: 5500,
    img: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c2c6d6a75da44a17bcd0e72b5c0cf64c_9366/IN2462_HM30.jpg",
  },
  {
    name: "Billy Footwear Low Top Zippers",
    price: 4800,
    oldPrice: 6500,
    img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lululemon Adaptive Training Gear",
    price: 7500,
    oldPrice: 9500,
    img: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&w=600&q=80",
  }
];
