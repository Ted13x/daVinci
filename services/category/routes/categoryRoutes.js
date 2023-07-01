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
router.post('/sub/create', createSubCategory);
router.post('/sub/ofCategory', getSubCategoriesOfCategory); // new route

// SubSubCategory routes
router.get('/sub/sub', getSubSubCategories);
router.post('/sub/sub/create', createSubSubCategory);
router.post('/sub/sub/ofSubCategory', getSubSubCategoriesOfSubCategory); // new route


export default router;
