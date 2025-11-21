/* ===========================
   📦 PRODUCT DATA
=========================== */
const products = {
  electronics: [
    { name: "boAt Airdopes 300", img: "https://m.media-amazon.com/images/I/71ndbdVgC7L._SY450_.jpg", price: "₹1,199", link: "https://amzn.to/3JiPa8b" },
    { name: "Fire-Boltt Aero Ear Buds", img: "https://m.media-amazon.com/images/I/61IyZTvsfmL._SY450_.jpg", price: "₹799", link: "https://amzn.to/4qQuC7V" },
    { name: "Dyno Leather Finish Earbuds ", img: "https://m.media-amazon.com/images/I/71PWG4BBeGL._SY450_.jpg", price: "₹899", link: "https://amzn.to/49A3bZA" },
    { name: "GOBOULT Z40 Earbuds", img: "https://m.media-amazon.com/images/I/71zv63FtPuL._SY450_.jpg", price: "₹999", link: "https://amzn.to/3WEI1SI" },
    { name: "GOBOULT Z20 Pro Ear Buds", img: "https://m.media-amazon.com/images/I/61dRXJvPh3L._SY450_.jpg", price: "₹899", link: "https://amzn.to/47nP6gy" },
    { name: "Redmi A4 5G", img: "https://m.media-amazon.com/images/I/4146RWmsLuL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹8,099", link: "https://amzn.to/4nDJhAe" },
    { name: "POCO C71", img: "https://m.media-amazon.com/images/I/610frsvhyBL._SX679_.jpg", price: "₹6,799", link: "https://amzn.to/4nF0klE" },
    { name: "Lava Bold N1 Pro", img: "https://m.media-amazon.com/images/I/41gDOU3bRcL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹6,599", link: "https://amzn.to/47L6pak" },
    { name: "iQOO Z10x 5G", img: "https://m.media-amazon.com/images/I/41BghjRj+oL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹13,998", link: "https://amzn.to/3JtnUDX" },
    { name: "Samsung Galaxy M17 5G", img: "https://m.media-amazon.com/images/I/71kmZ1zJYUL._SX679_.jpg", price: "₹15,499", link: "https://amzn.to/4oYM9sN" },
    { name: "URBN Lithium_Polymer 20000 mAh", img: "https://m.media-amazon.com/images/I/61CRsa2N6aL._SX679_.jpg", price: "₹1,299", link: "https://amzn.to/4nPH05q" },
    { name: "boAt Energyshroom PB400 Pro 20000 mAh", img: "https://m.media-amazon.com/images/I/61AErPaUAPL._SX679_.jpg", price: "₹1,599", link: "https://amzn.to/43JQdVs" },
    { name: "Ambrane Magsafe Wireless 10000 Mah", img: "https://m.media-amazon.com/images/I/61H84kDDNFL._SX679_.jpg", price: "₹1,499", link: "https://amzn.to/4oM70PU" },
    { name: "Lifelong Electronics 20000 mAh", img: "https://m.media-amazon.com/images/I/61-LzFrwl5L._SY450_.jpg", price: "₹1,779", link: "https://amzn.to/3WHKEmD" },
    { name: "Amazon Basics 20000 mAh", img: "https://m.media-amazon.com/images/I/61dSDJrmIlL._SX679_.jpg", price: "₹899", link: "https://amzn.to/4hMxHBR" }
  ],

  clothing: [
    { name: "An Elegant Frock", img: "https://m.media-amazon.com/images/I/61+zO6fqO5L._SX679_.jpg", price: "₹459", link: "https://amzn.to/4qDykS1" },
    { name: "White Anarkali Kurta Set", img: "https://m.media-amazon.com/images/I/61Qip7UftKL._SY741_.jpg", price: "₹759", link: "https://amzn.to/4omstyX" },
    { name: "Floral Printed Top", img: "https://m.media-amazon.com/images/I/61pcWPsND2L._SY741_.jpg", price: "₹329", link: "https://amzn.to/4oXGGm4" },
    { name: "V Neck Full Sleeve Short Kurti ", img: "https://m.media-amazon.com/images/I/61q63MzJP1L._SX569_.jpg", price: "₹359", link: "https://amzn.to/4qOQSz2" },
    { name: "Anarkali Floral Printed Frock", img: "https://m.media-amazon.com/images/I/41zOlQVR8ML.jpg", price: "₹465", link: "https://amzn.to/4oqI1lu" },
    { name: "Floral Printed Organza Kurti", img: "https://m.media-amazon.com/images/I/51t8NH4Z8+L._SX569_.jpg", price: "₹349", link: "https://amzn.to/3LkQ4BH" },
    { name: "Chanderi Stitched Kurti", img: "https://m.media-amazon.com/images/I/41PrpVP+5fL._SY741_.jpg", price: "₹477", link: "https://amzn.to/3JMOOXt" },
    { name: "Women Embroidery Straight Kurta Set", img: "https://m.media-amazon.com/images/I/51XuMysl-xL.jpg", price: "₹799", link: "https://amzn.to/4qOS1GM" },
    { name: "Kurti with Palazzo Set", img: "https://m.media-amazon.com/images/I/618qpneSnbL._SY741_.jpg", price: "₹438", link: "https://amzn.to/3JLUrVN" },
    { name: "Anarkali Embroidered Kurta", img: "https://m.media-amazon.com/images/I/71a6auq6F5L._SY741_.jpg", price: "₹699", link: "https://amzn.to/3JIKOqW" },
    { name: "Floral Printed Organza Kurti", img: "https://m.media-amazon.com/images/I/41rPYnY9Y-L.jpg", price: "₹399", link: "https://amzn.to/3JLVlBF" },
    { name: "Embroidered Straight Kurta Set", img: "https://m.media-amazon.com/images/I/713fX230N5L._SY741_.jpg", price: "₹1,499", link: "https://amzn.to/4oRNQb8" },
    { name: "Silk Kurta Set", img: "https://m.media-amazon.com/images/I/71fBnTPzTrL._SX679_.jpg", price: "₹899", link: "https://amzn.to/3Jkbyhv" },
    { name: "White Georgette Chikankari Anarkali Set", img: "https://m.media-amazon.com/images/I/61MGdqtpTdL._SX679_.jpg", price: "₹1,199", link: "https://amzn.to/49Caa4g" },
    { name: "Chanderi Silk Kurta Set", img: "https://m.media-amazon.com/images/I/41ZPH+kRBvL.jpg", price: "₹949", link: "https://amzn.to/3JHR5TP" }
  ],

  beauty: [
    { name: "Deconstruct Face Gel Sunscreen", img: "https://m.media-amazon.com/images/I/41+eHUEQibL._SY450_.jpg", price: "₹321", link: "https://amzn.to/4nMuKSR" },
    { name: "Pilgrim Brightening Ultra Light Gel Sunscreen", img: "https://m.media-amazon.com/images/I/61vdEheZI6L._SX679_.jpg", price: "₹345", link: "https://amzn.to/3LtzGyH" },
    { name: "DOT & KEY Super Bright Sunscreen", img: "https://m.media-amazon.com/images/I/61UGAajCkwL._SX679_.jpg", price: "₹387", link: "https://amzn.to/47HRAVU" },
    { name: "Aqualogica Glow+ Dewy Sunscreen", img: "https://m.media-amazon.com/images/I/61ACtF1fouL._SX569_.jpg", price: "₹379", link: "https://amzn.to/47sh3Uu" },
    { name: "Mamaearth Daily Glow Sunscreen", img: "https://m.media-amazon.com/images/I/71Wa-iqn-8L._SX679_.jpg", price: "₹247", link: "https://amzn.to/43ZYftp" },
    { name: "Lakme 9 to 5 CC Cream Mini", img: "https://m.media-amazon.com/images/I/41H5l4-T7fL._SX569_.jpg", price: "₹99", link: "https://amzn.to/4nFfast" },
    { name: "Glam21, 2-in-1 Compact Powder", img: "https://m.media-amazon.com/images/I/615nYrycv9L._SX679_.jpg", price: "₹281", link: "https://amzn.to/47LV9dE" },
    { name: "MARS Makeup Remover Wet Wipes", img: "https://m.media-amazon.com/images/I/51ZVtvs+ozL._SX679_.jpg", price: "₹88", link: "https://amzn.to/4oZU8FX" },
    { name: "Maybelline New York Color Sensational Creamy Matte Lipstick", img: "https://m.media-amazon.com/images/I/51f4HVnR4eL._SY450_.jpg", price: "₹194", link: "https://amzn.to/3LqSqil" },
    { name: "MARS 12 Shades Dance of Joy Eyeshadow Palette", img: "https://m.media-amazon.com/images/I/71uvN+4tV4L._SY450_.jpg", price: "₹257", link: "https://amzn.to/49IAXvL" },
    { name: "Swiss Beauty Ultimate 9 Pigmented Colors Eyeshadow Palette", img: "https://m.media-amazon.com/images/I/616kViYpgpL._SY450_.jpg", price: "₹246", link: "https://amzn.to/49CGIv2" },
    { name: "Blue Heaven Matte Love Mini Lipsticks", img: "https://m.media-amazon.com/images/I/61vc8xowYUL._SY450_PIbundle-10,TopRight,0,0_AA450SH20_.jpg", price: "₹279", link: "https://amzn.to/3LsCHQ0" },
    { name: "SUAKE 6-in-1 Beauty Blender Sponge Set", img: "https://m.media-amazon.com/images/I/61leqX+hJTS._SX569_PIbundle-6,TopRight,0,0_SX569SY424SH20_.jpg", price: "₹75", link: "https://amzn.to/3LwGyva" },
    { name: "Orgatre Sindoor Liquid For Women Combo Pack", img: "https://m.media-amazon.com/images/I/61shiyuyX9L._SX569_.jpg", price: "₹102", link: "https://amzn.to/47LV6ic" },
    { name: "Pilgrim Black Mischief Kajal Smudge & Waterproof", img: "https://m.media-amazon.com/images/I/6125Wl2NMgL._SX679_.jpg", price: "₹147", link: "https://amzn.to/43RnvC5" }
  ],

  "home-decor": [
    { name: "6 Pcs Penguin Miniature Decor Items Set", img: "https://m.media-amazon.com/images/I/61z-X9P-MQL._SX679_.jpg", price: "₹299", link: "https://amzn.to/4hZh5Xt" },
    { name: "Artificial Leaf Curtain LED String Light", img: "https://m.media-amazon.com/images/I/51EZ6B6fj5L._SX342_SY445_QL70_FMwebp_.jpg", price: "₹399", link: "https://amzn.to/4hPAjig" },
    { name: "3D Ocean Wave Effect Night Light for Bedroom", img: "https://m.media-amazon.com/images/I/71I41HSUSML._SX522_.jpg", price: "₹293", link: "https://amzn.to/3WL7dqw" },
    { name: "Resin Set of 4 Little Monk Buddha Statue", img: "https://m.media-amazon.com/images/I/71W0D-K-tBL._SX679_.jpg", price: "₹199", link: "https://amzn.to/49HtgpG" },
    { name: "Rechargeable Silicone Pear Night Lamp", img: "https://m.media-amazon.com/images/I/51zA0PYH6FL._SX522_.jpg", price: "₹349", link: "https://amzn.to/3JINmFA" },
    { name: "Aesthetic Room Decor With Fairy Lights", img: "https://m.media-amazon.com/images/I/81a3yjFQ6zL._SX679_.jpg", price: "₹297", link: "https://amzn.to/3XoBeMZ" },
    { name: "Hexagon Golden Mirror", img: "https://m.media-amazon.com/images/I/71yS-U+MRkL._SY879_.jpg", price: "₹228", link: "https://amzn.to/494BQyD" },
    { name: "Lying Panda Night Light", img: "https://m.media-amazon.com/images/I/51mcAG8wxVL._SX679_.jpg", price: "₹388", link: "https://amzn.to/3XfeW0e" },
    { name: "3D Crystal Moon Lamp", img: "https://m.media-amazon.com/images/I/61GfiZngyIL._SX522_.jpg", price: "₹198", link: "https://amzn.to/47HHyE7" },
    { name: "Rose Flower LED String Fairy Light", img: "https://m.media-amazon.com/images/I/71PPEO-O0kL._SX522_.jpg", price: "₹249", link: "https://amzn.to/4qUdaPW" },
    { name: "20 Photo Clip LED String Lights for Photo Hanging", img: "https://m.media-amazon.com/images/I/71uz9TRVU-L._SX522_.jpg", price: "₹248", link: "https://amzn.to/3XmWEKo" },
    { name: "3D Crystal Dolphin Lamp", img: "https://m.media-amazon.com/images/I/71PSgwoQHpL._SX522_.jpg", price: "₹260", link: "https://amzn.to/49Jkd7J" },
    { name: "Astronaut Night Light Galaxy LED Projector Lamp", img: "https://m.media-amazon.com/images/I/71tNpFOCa5L._SX522_.jpg", price: "₹525", link: "https://amzn.to/3JIO7yq" },
    { name: "Wax Scented Candles", img: "https://m.media-amazon.com/images/I/81CX0u-kQNL._SX522_.jpg", price: "₹359", link: "https://amzn.to/3WKP2RS" },
    { name: "Meditating Monk Buddha Smoke", img: "https://m.media-amazon.com/images/I/51eBV606V9L._SX679_.jpg", price: "₹130", link: "https://amzn.to/4nKzF6X" }
  ],

  jewellery: [
    { name: "Traditional Necklace Set", img: "https://m.media-amazon.com/images/I/61LddyoEutL._SY625_.jpg", price: "₹358", link: "https://amzn.to/3Jpqvil" },
    { name: "Handcrafted Jewellery Set", img: "https://m.media-amazon.com/images/I/71WObmkeDyL._SY625_.jpg", price: "₹699", link: "https://amzn.to/4oUoglT" },
    { name: "Kundan Necklace Set", img: "https://m.media-amazon.com/images/I/71731JeNy6L._SY625_.jpg", price: "₹485", link: "https://amzn.to/4p35xoz" },
    { name: "Long Chain Traditional Necklace Set", img: "https://m.media-amazon.com/images/I/71gZFlFVmzL._SY625_.jpg", price: "₹499", link: "https://amzn.to/3LO8gDI" },
    { name: "Diamond Necklace Jewellery Set", img: "https://m.media-amazon.com/images/I/81TJFmibLVL._SY625_.jpg", price: "₹449", link: "https://amzn.to/4ouypWP" },
    { name: "Gold Plated Wedding Jewellery Combo Set", img: "https://m.media-amazon.com/images/I/81ydeYKKKPL._SY625_.jpg", price: "₹583", link: "https://amzn.to/4qQkXOm" },
    { name: "Gold Plated Choker Necklace Set", img: "https://m.media-amazon.com/images/I/912iX-Sve0L._SY625_.jpg", price: "₹330", link: "https://amzn.to/49rKiZ5" },
    { name: "Multicolour Glass Bangles Set", img: "https://m.media-amazon.com/images/I/91ITVmRGc6L._SY625_.jpg", price: "₹199", link: "https://amzn.to/47vmNwD" },
    { name: "American Diamond Gold Plated Bangles", img: "https://m.media-amazon.com/images/I/81a-L2gRfCL._SY695_.jpg", price: "₹274", link: "https://amzn.to/47LBNFo" },
    { name: "Traditional Bangles Set", img: "https://m.media-amazon.com/images/I/A1+r-oOKEpL._SX625_.jpg", price: "₹550", link: "https://amzn.to/4hOp3m9" },
    { name: "Shell Pearl Necklace", img: "https://m.media-amazon.com/images/I/51YU60HM7DL._SY625_.jpg", price: "₹245", link: "https://amzn.to/4oy7GIW" },
    { name: "Chains 5 Pcs Combo Set", img: "https://m.media-amazon.com/images/I/71R2QnSdv+L._SY625_.jpg", price: "₹299", link: "https://amzn.to/3Xi9TMx" },
    { name: "Multilayer Gold Plated Bangle Bracelet", img: "https://m.media-amazon.com/images/I/71UCk9VMVrL._SY625_.jpg", price: "₹267", link: "https://amzn.to/47KMZ5n" },
    { name: "Silver Bracelets Pack of 10", img: "https://m.media-amazon.com/images/I/61VFK4EpjHL._SY625_.jpg", price: "₹299", link: "https://amzn.to/4p38aXt" },
    { name: "Bracelet Bangles", img: "https://m.media-amazon.com/images/I/71PdwhUWFpL._SY695_.jpg", price: "₹345", link: "https://amzn.to/4p1bBhf" }
  ],

  footwear: [
    { name: "Comfortable Block Heel Sandals", img: "https://m.media-amazon.com/images/I/71Mgw9wWocL._SY695_.jpg", price: "₹899", link: "https://amzn.to/4oZRX5h" },
    { name: "Pointed Stiletto Heel Pump Shoes", img: "https://m.media-amazon.com/images/I/519TTufWzAL._SY695_.jpg", price: "₹749", link: "https://amzn.to/3WNDGwr" },
    { name: "Ankle Strap Chunky Block Heels with Gold Accent", img: "https://m.media-amazon.com/images/I/71mK-mOH5HL._SY625_.jpg", price: "₹499", link: "https://amzn.to/4qN6x1t" },
    { name: "Multi Cross Strap Block Heeled Sandals", img: "https://m.media-amazon.com/images/I/61K+eb2nqwL._SY695_.jpg", price: "₹591", link: "https://amzn.to/4hPIqLK" },
    { name: "Women Pump Heels", img: "https://m.media-amazon.com/images/I/51qG77r7NXL._SY695_.jpg", price: "₹646", link: "https://amzn.to/3LmuwVl" },
    { name: "Women Block Heel Sandal", img: "https://m.media-amazon.com/images/I/61HtMavDO1L._SY695_.jpg", price: "₹699", link: "https://amzn.to/4hSpn3x" },
    { name: "Stylish & Comfortable Block Heels Sandals", img: "https://m.media-amazon.com/images/I/61EBbchW23L._SY625_.jpg", price: "₹899", link: "https://amzn.to/4nDJhAe" },
    { name: "Women's Rhinestone Thong Sandals with Modern Clear Heel", img: "https://m.media-amazon.com/images/I/31eac1Dz7gL._SY395_SX395_QL70_FMwebp_.jpg", price: "₹879", link: "https://amzn.to/3JCv6xE" },
    { name: "Block Heel Sandal For Women", img: "https://m.media-amazon.com/images/I/61X+aWsefZL._SY695_.jpg", price: "₹597", link: "https://amzn.to/4rds8Rg" },
    { name: "Simple and Elegant Heels", img: "https://m.media-amazon.com/images/I/61h3AF0kavL._SY695_.jpg", price: "₹475", link: "https://amzn.to/480eCYc" },
    { name: "Light Weight Comfortable & Trendy Block Heels", img: "https://m.media-amazon.com/images/I/51HuzSyyvwL._SY695_.jpg", price: "₹549", link: "https://amzn.to/4a2Lnqd" },
    { name: "Women's Town Heeled Sandal", img: "https://m.media-amazon.com/images/I/512tNz7LHtL._SY695_.jpg", price: "₹599", link: "https://amzn.to/4a0FUjK" },
    { name: "Trendy Party Block Heel Sandals", img: "https://m.media-amazon.com/images/I/51UT5+FkoeL._SY695_.jpg", price: "₹649", link: "https://amzn.to/4o03lgr" },
    { name: "Women Pump Heels", img: "https://m.media-amazon.com/images/I/51qG77r7NXL._SY695_.jpg", price: "₹646", link: "https://amzn.to/4nZFaid" },
    { name: "Open-Toe flower design Spool Heels", img: "https://m.media-amazon.com/images/I/51N+RmiuOLL._SY695_.jpg", price: "₹693", link: "https://amzn.to/4i5091K" }

  ],

  "kitchen-finds": [
    { name: "Fridge Storage Boxes (Pack of 6)", img: "https://m.media-amazon.com/images/I/81Rd+OznlEL._SX679_.jpg", price: "₹199", link: "https://amzn.to/47RwTIu" },
    { name: "Sticky Hangers with Stainless Hooks", img: "https://m.media-amazon.com/images/I/61UemhtT6QL._SX679_.jpg", price: "₹149", link: "https://amzn.to/4prjsot" },
    { name: "3-in-1 Soap Dispenser with Sponge Holder", img: "https://m.media-amazon.com/images/I/51DS8h5RqhL._SX679_.jpg", price: "₹149", link: "https://amzn.to/48pjOWW" },
    { name: "Stainless Steel Sink Strainer", img: "https://m.media-amazon.com/images/I/81RyYkT207L._SX679_.jpg", price: "₹119", link: "https://amzn.to/4p4NUos" },
    { name: "Stainless Steel Sink Corner Strainer", img: "https://m.media-amazon.com/images/I/71qkzbS1yrL._SX679_.jpg", price: "₹395", link: "https://amzn.to/3X5sbAJ" },
    { name: "Silicon Roti Baking Mat", img: "https://m.media-amazon.com/images/I/71bXwj7t8kL._SX679_.jpg", price: "₹220", link: "https://amzn.to/4a4TNNO" },
    { name: "Multipurpose Kitchen Knives", img: "https://m.media-amazon.com/images/I/71+RhNMObgL._SX679_.jpg", price: "₹259", link: "https://amzn.to/48pUAHT" },
    { name: "Thickened Magic Cleaning Cloth", img: "https://m.media-amazon.com/images/I/81xYpAR2eDL._SX679_.jpg", price: "₹139", link: "https://amzn.to/3JYvHKf" },
    { name: "Tap Extender for Kitchen Sink", img: "https://m.media-amazon.com/images/I/61TI-jl3UiL._SX679_.jpg", price: "₹349", link: "https://amzn.to/4oNHPNf" },
    { name: "6 Pcs Round Reusable Non-Stick air Fryer Accessories", img: "https://m.media-amazon.com/images/I/61soAey9z4L._SX679_.jpg", price: "₹439", link: "https://amzn.to/4a5FGIa" },
    { name: "Knife Sharpener Tool", img: "https://m.media-amazon.com/images/I/51UWc+8vm8L._SX679_.jpg", price: "₹189", link: "https://amzn.to/4ppg25M" },
    { name: "NutriPro Juicer Mixer Grinder", img: "https://m.media-amazon.com/images/I/71rH4vEE4nL._SX679_.jpg", price: "₹1,599", link: "https://amzn.to/44iUpf1" },
    { name: "Stainless Steel Steamer with Glass Lid", img: "https://m.media-amazon.com/images/I/81ry+Z3KACL._SX679_.jpg", price: "₹809", link: "https://amzn.to/3K2pInK" },
    { name: "Electric Kettle 1.2 Litre", img: "https://m.media-amazon.com/images/I/612jrIe9zEL._SX679_.jpg", price: "₹699", link: "https://amzn.to/48bGOaP" },
    { name: "Opalware Dinner Set", img: "https://m.media-amazon.com/images/I/71h6bc9jJWL._SX679_.jpg", price: "₹1,299", link: "https://amzn.to/489HDR8" }
  ],

  "korean-store": [
    { name: "Korean Tteokbokki Rice Cakes, 500g", img: "https://m.media-amazon.com/images/I/61pCjCv+SiL._SX679_.jpg", price: "₹347", link: "https://amzn.to/3XIIdR8" },
    { name: "Korean Instant Tteokbokki - Buldak, 240g", img: "https://m.media-amazon.com/images/I/617jYKJzRTL._SX679_.jpg", price: "₹440", link: "https://amzn.to/3XIItQ6" },
    { name: "Korean Collagen Face Mask Sheet with Hydrogel", img: "https://m.media-amazon.com/images/I/51BB5pgW66L._SX679_.jpg", price: "₹220", link: "https://amzn.to/48nNp33" },
    { name: "Korean Glass Skin Bio-Collagen Overnight Face Mask", img: "https://m.media-amazon.com/images/I/51tsQNzSvaL._SX679_.jpg", price: "₹299", link: "https://amzn.to/49xAfBG" },
    { name: "Korean Skincare Hydrating Soap", img: "https://m.media-amazon.com/images/I/71flbqauG2L._SX679_.jpg", price: "₹199", link: "https://amzn.to/4reqIpr" },
    { name: "Korean Retro Style Vintage Top", img: "https://m.media-amazon.com/images/I/519NqhKLxhL._SX679_.jpg", price: "₹850", link: "https://amzn.to/48qZvIF" },
    { name: "Shining Diva Fashion Leather Belts", img: "https://m.media-amazon.com/images/I/61YFLXQYKQL._SY695_.jpg", price: "₹497", link: "https://amzn.to/4ofFlpP" },
    { name: "Women's Fuzzy Woolen Socks", img: "https://m.media-amazon.com/images/I/516hxqQAAZL.jpg", price: "₹299", link: "https://amzn.to/3MglSI4" },
    { name: "Women's Denim High Waist Baggy Jeans", img: "https://m.media-amazon.com/images/I/61jPBmRWaAL._SY741_.jpg", price: "₹595", link: "https://amzn.to/4pnV2fu" },
    { name: "Korean Natural Pink Lips Color Changing LipStick", img: "https://m.media-amazon.com/images/I/519+6B7+JvL._SX522_.jpg", price: "₹255", link: "https://amzn.to/4o7E4B6" },
    { name: "Korean Quality Soft Sweetheart Bunny", img: "https://m.media-amazon.com/images/I/41CVg2eq58S.jpg", price: "₹499", link: "https://amzn.to/4reu2AV" },
    { name: "Korean Fashion Style Pearl Hair Clips", img: "https://m.media-amazon.com/images/I/81Z7cQqwRwL._SX522_PIbundle-11,TopRight,0,0_AA522SH20_.jpg", price: "₹299", link: "https://amzn.to/4oa0m5g" },
    { name: "Korean Fur Hair Clips", img: "https://m.media-amazon.com/images/I/618OA8PCc2L._PIbundle-4,TopRight,0,0_SX509SY679SH20_.jpg", price: "₹249", link: "https://amzn.to/3K79dXt" },
    { name: "Korean Rice Toner for Glowing Skin", img: "https://m.media-amazon.com/images/I/41jEVuC-UrL._SX679_.jpg", price: "₹297", link: "https://amzn.to/3MgnLVa" },
    { name: "9 pcs Flower Claw Clips", img: "https://m.media-amazon.com/images/I/51RulNW22kL._SX679_PIbundle-9,TopRight,0,0_AA679SH20_.jpg", price: "₹299", link: "https://amzn.to/4p1FQFm" }
  ]
};

/* ===========================
   ⚙️ DOM ELEMENTS
=========================== */
const productList = document.getElementById("product-list");
const categoryCards = document.querySelectorAll(".category-card");
const navLinks = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("mobile-menu");
const navLinksContainer = document.querySelector(".nav-links");

/* ===========================
   📱 MOBILE NAV TOGGLE
=========================== */
menuToggle.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
  menuToggle.classList.toggle("toggle");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active");
    menuToggle.classList.remove("toggle");
  });
});

/* ===========================
   🧭 NAVBAR CATEGORY CLICK
=========================== */
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const category = link.dataset.category;

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    if (category === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    showLoading();
    setTimeout(() => {
      showProducts(category);
      productList.scrollIntoView({ behavior: "smooth" });
    }, 600);
  });
});

/* ===========================
   🛍 CATEGORY CARD CLICK
=========================== */
categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;

    categoryCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    showLoading();
    setTimeout(() => {
      showProducts(category);
      productList.scrollIntoView({ behavior: "smooth" });
    }, 600);
  });
});

/* ===========================
   🧩 DISPLAY PRODUCTS
=========================== */
function showProducts(category) {
  const items = products[category];
  if (!items) return;

  let html = `<div class="product-container">`;
  html += items.map(
    p => `
      <div class="product-card fade-in">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price-tag"> ${p.price}</p>
        <a href="${p.link}" target="_blank" class="buy-btn">🛒 Buy Now</a>
      </div>
    `
  ).join("");
  html += `</div>`;
  productList.innerHTML = html;
}

/* ===========================
   🔄 LOADER ANIMATION
=========================== */
function showLoading() {
  productList.innerHTML = `
    <div class="loader-container fade-in">
      <div class="spinner"></div>
      <p>Loading deals...</p>
    </div>
  `;
}

/* ===========================
   🏠 DEFAULT MESSAGE
=========================== */
productList.innerHTML = `
  <p class="note" style="text-align:center; color:#555;">
    Select a category above to view top deals 👆
  </p>
`;
