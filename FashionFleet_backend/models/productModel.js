import mongoose from "mongoose";

const productModel = new mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    productId: {
      type: String,
      require: true,
      unique: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Clothing",
        "Footwear",
        "Accessories",
        "Perfumes",
        "Bags",
        "Watches",
        "Eyewear",
        "Hats and Caps",
        "Belts",
        "Socks and Hosiery",
        "Beauty Products",
      ],
    },
    subcategory: {
      type: String,
      required: true,
      enum: [
        { value: "Tops", category: "Clothing" },
        { value: "Bottoms", category: "Clothing" },
        { value: "Dresses", category: "Clothing" },
        { value: "Outerwear", category: "Clothing" },
        { value: "Activewear", category: "Clothing" },
        { value: "Sleepwear", category: "Clothing" },
        { value: "Swimwear", category: "Clothing" },
        { value: "Suits and Blazers", category: "Clothing" },

        { value: "Sneakers", category: "Footwear" },
        { value: "Boots", category: "Footwear" },
        { value: "Sandals", category: "Footwear" },
        { value: "Flats", category: "Footwear" },
        { value: "Heels", category: "Footwear" },
        { value: "Slippers", category: "Footwear" },
        { value: "Loafers", category: "Footwear" },
        { value: "Athletic Shoes", category: "Footwear" },

        { value: "Jewelry", category: "Accessories" },
        { value: "Bags", category: "Accessories" },
        { value: "Watches", category: "Accessories" },
        { value: "Eyewear", category: "Accessories" },
        { value: "Hats and Caps", category: "Accessories" },
        { value: "Belts", category: "Accessories" },
        { value: "Scarves and Wraps", category: "Accessories" },
        { value: "Wallets and Cardholders", category: "Accessories" },

        { value: "Men's Perfumes", category: "Perfumes" },
        { value: "Women's Perfumes", category: "Perfumes" },
        { value: "Unisex Perfumes", category: "Perfumes" },
        { value: "Eau de Toilette", category: "Perfumes" },
        { value: "Eau de Parfum", category: "Perfumes" },
        { value: "Cologne", category: "Perfumes" },
        { value: "Fragrance Gift Sets", category: "Perfumes" },
        { value: "Body Sprays", category: "Perfumes" },

        { value: "Handbags", category: "Bags" },
        { value: "Backpacks", category: "Bags" },
        { value: "Crossbody Bags", category: "Bags" },
        { value: "Tote Bags", category: "Bags" },
        { value: "Clutches", category: "Bags" },
        { value: "Wallets", category: "Bags" },
        { value: "Shoulder Bags", category: "Bags" },
        { value: "Travel Bags", category: "Bags" },

        { value: "Analog Watches", category: "Watches" },
        { value: "Digital Watches", category: "Watches" },
        { value: "Chronograph Watches", category: "Watches" },
        { value: "Smartwatches", category: "Watches" },
        { value: "Dress Watches", category: "Watches" },
        { value: "Sports Watches", category: "Watches" },
        { value: "Luxury Watches", category: "Watches" },
        { value: "Casual Watches", category: "Watches" },

        { value: "Sunglasses", category: "Eyewear" },
        { value: "Prescription Glasses", category: "Eyewear" },
        { value: "Reading Glasses", category: "Eyewear" },
        { value: "Blue Light Glasses", category: "Eyewear" },
        { value: "Sports Eyewear", category: "Eyewear" },
        { value: "Fashion Eyewear", category: "Eyewear" },
        { value: "Aviator Sunglasses", category: "Eyewear" },
        { value: "Wayfarer Sunglasses", category: "Eyewear" },

        { value: "Baseball Caps", category: "Hats and Caps" },
        { value: "Beanies", category: "Hats and Caps" },
        { value: "Bucket Hats", category: "Hats and Caps" },
        { value: "Fedoras", category: "Hats and Caps" },
        { value: "Sun Hats", category: "Hats and Caps" },
        { value: "Trucker Hats", category: "Hats and Caps" },
        { value: "Visors", category: "Hats and Caps" },
        { value: "Berets", category: "Hats and Caps" },
      ],
    },
    brand: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
    },
    availability: {
      type: String,
      enum: ["In Stock", "Out of Stock"],
      default: "In Stock",
    },
    productImages: {
      type: [String],
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: {
      type: [String],
    },
    size: {
      type: [
        {
          type: String,
          enum: ["S", "M", "L", "XL"],
        },
      ],
      default: ["M"],
    },
    color: {
      type: String,
    },
    material: {
      type: String,
    },
    quantityAvailable: {
      type: Number,
      default: 0,
    },
    SKU: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productModel);
