import { useState } from "react";
import axios from "axios";

const useCategoryHandlers = (initialState) => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [subSubCategory, setSubSubCategory] = useState(null);

    const handleChange = (e) => {
      setCategory({ ...category, [e.target.name]: e.target.value });
  };

  // Funktionen zur Erstellung von Kategorien, Unterkategorien und Unterunterkategorien
  const createCategory = async (categoryName) => {
    try {
      const response = await axios.post('/api/category/create', { name: categoryName });
      setCategory(response.data.category);
    } catch (err) {
      console.error(err);
    }
  };

  const createSubcategory = async (subCategoryName, parentId) => {
    try {
      const response = await axios.post('/api/category/sub/create', { name: subCategoryName, parent: parentId });
      setSubCategory(response.data.subCategory);
    } catch (err) {
      console.error(err);
    }
  };

  const createSubSubcategory = async (subsubcategoryName, parentId) => {
    try {
      const response = await axios.post('/api/category/createSubSubcategory', { name: subsubcategoryName, parent: parentId });
      setSubSubCategory(response.data.subSubCategory);
    } catch (err) {
      console.error(err);
    }
  };

  // const handleAddCategoriesToDatabase = async ({ category, subCategory, subSubCategory }) => {
  //   try {
  //     let lastCreatedCategoryId = null;

  //     if (category) {
  //       const createdCategory = await axios.post('/api/proxy/category/create', { name: category });
  //       lastCreatedCategoryId = createdCategory.data._id;
  //     }

  //     if (subCategory) {
  //       const createdSubcategory = await axios.post('/api/proxy/category/create', { name: subCategory, parent: lastCreatedCategoryId });
  //       lastCreatedCategoryId = createdSubcategory.data._id;
  //     }

  //     if (subSubCategory) {
  //       const createdSubSubcategory = await axios.post('/api/proxy/category/create', { name: subSubCategory, parent: lastCreatedCategoryId });
  //       lastCreatedCategoryId = createdSubSubcategory.data._id;
  //     }

  //     return true;
  //   } catch (error) {
  //     console.error('Error while creating categories:', error);
  //     return false;
  //   }
  // };

  return {
    handleChange,
    category,
    subCategory,
    subSubCategory,
    createCategory,
    createSubcategory,
    createSubSubcategory,
    // handleAddCategoriesToDatabase
  };
};

export default useCategoryHandlers;
