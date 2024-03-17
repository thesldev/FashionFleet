import productModel from "../models/productModel.js";

// create new product
export const createProduct = async (req, res, next) => {
  const newProduct = new productModel(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    next(err);
  }
};

// update existing product
export const updateProduct = async (req, res, next) => {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updateProduct);
  } catch (err) {
    next(err);
  }
};

//  delete existing product
export const deleteProduct = async (req, res, next) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    next(err);
  }
};

// display selected product
export const product = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

//  display all the products
export const allProducts = async (req, res, next) => {
  try {
    const allproducts = await productModel.find();
    res.status(200).json(allproducts);
  } catch (err) {
    next(err);
  }
};
