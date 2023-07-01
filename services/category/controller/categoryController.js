import { Category, SubCategory, SubSubCategory } from '../models/Category.js';

// Controller for creating a new Category
export // categoryController.js

const createCategory = async (req, res, next) => {
  try {
    let newCategory = new Category({
      name: req.body.name,
    });

    let category = await newCategory.save();

    if (!category) {
      throw new Error('Category could not be saved');
    }

    res.status(201).json({
      success: true,
      data: category
    });
  } catch (error) {
    next(error);
  }
};

export const createSubCategory = async (req, res, next) => {
  try {
    let newSubcategory = new Category({
      name: req.body.name,
      parentCategory: req.body.parentCategoryId,
    });

    let subcategory = await newSubcategory.save();

    if (!subcategory) {
      throw new Error('Subcategory could not be saved');
    }

    res.status(201).json({
      success: true,
      data: subcategory
    });
  } catch (error) {
    next(error);
  }
};

export const createSubSubCategory = async (req, res, next) => {
  try {
    let newSubSubcategory = new Category({
      name: req.body.name,
      parentCategory: req.body.parentSubcategoryId,
    });

    let subSubcategory = await newSubSubcategory.save();

    if (!subSubcategory) {
      throw new Error('SubSubcategory could not be saved');
    }

    res.status(201).json({
      success: true,
      data: subSubcategory
    });
  } catch (error) {
    next(error);
  }
};



// Controller for fetching all Categories
export const getCategories = async (req, res) => {
  try {
      const categories = await Category.find();
      res.status(200).json(categories);
  } catch (error) {
      res.status(500).json({ error: 'Error in fetching categories', message: error.message });
  }
};

// Controller for fetching all SubCategories
export const getSubCategories = async (req, res) => {
  try {
      const subCategories = await SubCategory.find();
      res.status(200).json(subCategories);
  } catch (error) {
      res.status(500).json({ error: 'Error in fetching sub categories',  message: error.message });
  }
};

// Controller for fetching all SubSubCategories
export const getSubSubCategories = async (req, res) => {
  try {
      const subSubCategories = await SubSubCategory.find();
      res.status(200).json(subSubCategories);
  } catch (error) {
      res.status(500).json({ error: 'Error in fetching sub sub categories',  message: error.message });
  }
};

// Controller for fetching SubCategories of a specific Category
export const getSubCategoriesOfCategory = async (req, res) => {
    const { categoryId } = req.body;

    try {
        const category = await Category.findById(categoryId);
        const subCategories = await SubCategory.find({ _id: { $in: category.subCategories } });
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ error: 'Error in fetching sub categories of category',  message: error.message });
    }
};

// Controller for fetching SubSubCategories of a specific SubCategory
export const getSubSubCategoriesOfSubCategory = async (req, res) => {
    const { subCategoryId } = req.body;

    try {
        const subCategory = await SubCategory.findById(subCategoryId);
        const subSubCategories = await SubSubCategory.find({ _id: { $in: subCategory.subSubCategories } });
        res.status(200).json(subSubCategories);
    } catch (error) {
        res.status(500).json({ error: 'Error in fetching sub sub categories of sub category',  message: error.message });
    }
};
