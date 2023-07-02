import { Category, SubCategory, SubSubCategory } from '../models/Category.js';

// Controller for creating a new Categories
export const createCategory = async (req, res, next) => {
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
    let newSubcategory = new SubCategory({
      name: req.body.name,
      parentCategory: req.body.parentCategory,
    });

    const parent = await Category.findById(req.body.parentCategory);
    parent.childCategories.push(newSubcategory._id);

    await parent.save();
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
    let newSubSubcategory = new SubSubCategory({
      name: req.body.name,
      parentCategory: req.body.parentSubcategory,
    });

    const parent = await SubCategory.findById(req.body.parentCategory);
    parent.childCategories.push(newSubSubcategory._id);

    await parent.save();
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

    try {
        const category = await Category.findById(req.params.id);
        const subCategories = await SubCategory.find({ _id: { $in: category.childCategories } });
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ error: 'Error in fetching sub categories of category',  message: error.message });
    }
};

// Controller for fetching SubSubCategories of a specific SubCategory
export const getSubSubCategoriesOfSubCategory = async (req, res) => {

    try {
        const subCategory = await SubCategory.findById(req.params.id);
        const subSubCategories = await SubSubCategory.find({ _id: { $in: subCategory.childCategories } });
        res.status(200).json(subSubCategories);
    } catch (error) {
        res.status(500).json({ error: 'Error in fetching sub sub categories of sub category',  message: error.message });
    }
};

// Controller for updating a Category
export const updateCategory = async (req, res) => {
 try {
    const category = await Category.findById(req.params.id);
    category.name = req.body.name;
    await category.save();
    res.status(200).json(category);
 } catch (error) {
    res.status(500).json({ error: 'Error in updating category',  message: error.message });   
 } 
}