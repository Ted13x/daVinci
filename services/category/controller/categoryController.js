import { Category, SubCategory, SubSubCategory } from '../models/Category.js';

// Controller for creating a new Categories
export const createCategory = async (req, res, next) => {
  try {

    const existingCategory = await Category.findOne({ name: req.body.name });

    if (existingCategory) {
      return res.status(400).json({ error: 'A category with this name already exists.' });
    }
    
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

    const existingSubCategory = await SubCategory.findOne({ name: req.body.name, parentCategory: req.body.parentCategory });

    if (existingSubCategory) {
      return res.status(400).json({ error: 'A subcategory with this name already exists under this category.' });
    }

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

    const existingSubSubCategory = await SubSubCategory.findOne({ name: req.body.name, parentCategory: req.body.parentSubcategory });

    if (existingSubSubCategory) {
      return res.status(400).json({ error: 'A subsubcategory with this name already exists under this subcategory.' });
    }

    let newSubSubcategory = new SubSubCategory({
      name: req.body.name,
      parentCategory: req.body.parentCategory,
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

export const updateSubCategory = async (req, res) => {
  try {
     const subCategory = await SubCategory.findById(req.params.id);
     if (!subCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
     subCategory.name = req.body.name;
     await subCategory.save();
     res.status(200).json(subCategory);
  } catch (error) {
     res.status(500).json({ error: 'Error in updating category',  message: error.message });   
  } 
 }

  export const updateSubSubCategory = async (req, res) => {
    try {
       const subSubCategory = await SubSubCategory.findById(req.params.id);
       subSubCategory.name = req.body.name;
       await subSubCategory.save();
       res.status(200).json(subSubCategory);
    } catch (error) {
       res.status(500).json({ error: 'Error in updating category',  message: error.message });   
    } 
   }

   // Controller for removing a Category
export const removeCategory = async (req, res) => {
  try {
     const category = await Category.findById(req.params.id);
     await category.remove();
     res.status(200).json({ message: 'Category removed' });
  } catch (error) {
     res.status(500).json({ error: 'Error in removing category',  message: error.message });   
  } 
}

export const removeSubCategory = async (req, res) => {
  try {
     const subCategory = await SubCategory.findById(req.params.id);
     await subCategory.remove();
     res.status(200).json({ message: 'SubCategory removed' });
  } catch (error) {
     res.status(500).json({ error: 'Error in removing sub category',  message: error.message });   
  } 
}

export const removeSubSubCategory = async (req, res) => {
  try {
     const subSubCategory = await SubSubCategory.findById(req.params.id);
     await subSubCategory.deleteOne();
     res.status(200).json({ message: 'SubSubCategory removed' });
  } catch (error) {
     res.status(500).json({ error: 'Error in removing sub sub category',  message: error.message });   
  } 
}

// Controller for removing a Category including all SubCategories and SubSubCategories
export const removeCategoryWithAllChilds = async (req, res) => {
  try {
     const category = await Category.findById(req.params.id);
     const subCategories = await SubCategory.find({ _id: { $in: category.childCategories } });

     // Collect all childCategories from each subCategory document
     const allSubSubCategoryIds = subCategories.reduce((ids, subCategory) => {
       return [...ids, ...subCategory.childCategories];
     }, []);

     const subSubCategories = await SubSubCategory.find({ _id: { $in: allSubSubCategoryIds } });

     await Category.deleteOne({ _id: category._id });
     await SubCategory.deleteMany({ _id: { $in: subCategories.map(subCategory => subCategory._id) } });
     await SubSubCategory.deleteMany({ _id: { $in: subSubCategories.map(subSubCategory => subSubCategory._id) } });

     res.status(200).json({ message: 'Category with sub categories removed' });
  } catch (error) {
     res.status(500).json({ error: 'Error in removing category with sub categories',  message: error.message });   
  } 
}



// Controller for removing a SubCategory including all SubSubCategories
export const removeSubCategoryWithAllChilds = async (req, res) => {
  try {
     const subCategory = await SubCategory.findById(req.params.id);
     const subSubCategories = await SubSubCategory.find({ _id: { $in: subCategory.childCategories } });
     await SubCategory.deleteOne({ _id: req.params.id });
     await SubSubCategory.deleteMany({ _id: { $in: subSubCategories.map(subSubCategory => subSubCategory._id) } });
     res.status(200).json({ message: 'Sub category with sub sub categories removed' });
  } catch (error) {
     res.status(500).json({ error: 'Error in removing sub category with sub sub categories',  message: error.message });   
  } 
}


