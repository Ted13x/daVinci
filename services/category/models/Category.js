import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  childCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
  }],
});

const SubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  childCategories: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'SubSubCategory',
}],
});

const SubSubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
  },
});

const Category = mongoose.model('Category', CategorySchema);
const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
const SubSubCategory = mongoose.model('SubSubCategory', SubSubCategorySchema);

export { Category, SubCategory, SubSubCategory };
