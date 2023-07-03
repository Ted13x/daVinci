import express from 'express';
import { 
    createCategory, 
    createSubCategory, 
    createSubSubCategory, 
    getCategories, 
    getSubCategories, 
    getSubSubCategories,
    getSubCategoriesOfCategory,
    getSubSubCategoriesOfSubCategory,
    updateCategory,
    updateSubCategory,
    updateSubSubCategory,
    removeCategoryWithAllChilds,
    removeSubCategoryWithAllChilds,
    removeSubSubCategory
} from '../controller/categoryController.js';

const router = express.Router();

// Middleware to log incoming requests
router.use((req, res, next) => {
  console.log(`Received request at ${req.originalUrl}`);
  next();
});

// Category routes
router.get('/', getCategories);
router.post('/create', createCategory);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', removeCategoryWithAllChilds);

// SubSubCategory routes
router.get('/sub-sub/:id', getSubSubCategoriesOfSubCategory);
router.get('/sub-sub/', getSubSubCategories);
router.post('/sub-sub/create', createSubSubCategory);
router.put('/sub-sub/update/:id', updateSubSubCategory);
router.delete('/sub-sub/delete/:id', removeSubSubCategory);

// SubCategory routes
router.get('/sub/:id', getSubCategoriesOfCategory);
router.get('/sub', getSubCategories);
router.post('/sub/create', createSubCategory);
router.put('/sub/update/:id', updateSubCategory);
router.delete('/sub/delete/:id', removeSubCategoryWithAllChilds);






export default router;
