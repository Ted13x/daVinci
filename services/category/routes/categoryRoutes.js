import express from 'express';
import { 
    createCategory, 
    createSubCategory, 
    createSubSubCategory, 
    getCategories, 
    getSubCategories, 
    getSubSubCategories,
    getSubCategoriesOfCategory,
    getSubSubCategoriesOfSubCategory
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

// SubCategory routes
router.get('/sub', getSubCategories);
router.get('/sub/:id', getSubCategoriesOfCategory);
router.post('/sub/create', createSubCategory);

// SubSubCategory routes
router.get('/sub-sub/', getSubSubCategories);
router.get('/sub-sub/:id', getSubSubCategoriesOfSubCategory);
router.post('/sub-sub/create', createSubSubCategory);



export default router;
