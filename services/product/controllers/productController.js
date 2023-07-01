import Product from '../models/Product.js'; 
import Category from '../../category/models/Category.js'; 

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res, next) => {
  try {
    let category;
    if (req.body.newCategory) {
      category = await Category.createCategory(req.body.newCategory);
    } else if (req.body.newSubcategory) {
      category = await Category.createSubcategory(req.body.newSubcategory);
    } else if (req.body.newSubSubcategory) {
      category = await Category.createSubSubcategory(req.body.newSubSubcategory);
    } else {
      category = await Category.getCategory(req.body.categoryId);
    }
    if (!category) throw new Error('Category could not be found or created');

    let newProduct = new Product({
      ...req.body,
      category: category._id  // Set the category ID
    });

    let product = await newProduct.save();

    if (!product) {
      throw new Error('Product could not be saved');
    }

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};


const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Deleted product' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
