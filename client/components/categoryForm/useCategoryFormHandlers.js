import { useState, useContext, useEffect } from "react";
import { UserContext } from '../../context/UserContext.js';
import axios from "axios";

const useProductHandlers = (initialState) => {
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [subsubcategory, setSubsubcategory] = useState(null);

    const handleChange = (e) => {
      setCategory({ ...product, [e.target.name]: e.target.value });
  };

// category handlers

  // Funktionen zur Erstellung von Kategorien, Unterkategorien und Unterunterkategorien
  const createCategory = async (categoryName) => {
    try {
      const response = await axios.post('/api/category/createCategory', { name: categoryName });
      setCategory(response.data.category);
    } catch (err) {
      console.error(err);
    }
  };

  const createSubcategory = async (subcategoryName, parentId) => {
    try {
      const response = await axios.post('/api/category/createSubcategory', { name: subcategoryName, parent: parentId });
      setSubcategory(response.data.subcategory);
    } catch (err) {
      console.error(err);
    }
  };

  const createSubSubcategory = async (subsubcategoryName, parentId) => {
    try {
      const response = await axios.post('/api/category/createSubSubcategory', { name: subsubcategoryName, parent: parentId });
      setSubsubcategory(response.data.subsubcategory);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddCategoriesToDatabase = async ({ category, subcategory, subsubcategory }) => {
    try {
      let lastCreatedCategoryId = null;

      if (category) {
        const createdCategory = await axios.post('/api/proxy/category/create', { name: category });
        lastCreatedCategoryId = createdCategory.data._id;
      }

      if (subcategory) {
        const createdSubcategory = await axios.post('/api/proxy/category/create', { name: subcategory, parent: lastCreatedCategoryId });
        lastCreatedCategoryId = createdSubcategory.data._id;
      }

      if (subsubcategory) {
        const createdSubSubcategory = await axios.post('/api/proxy/category/create', { name: subsubcategory, parent: lastCreatedCategoryId });
        lastCreatedCategoryId = createdSubSubcategory.data._id;
      }

      return true;
    } catch (error) {
      console.error('Error while creating categories:', error);
      return false;
    }
  };

  return {
    handleChange,
    category,
    subcategory,
    subsubcategory,
    createCategory,
    createSubcategory,
    createSubSubcategory,
    handleAddCategoriesToDatabase
  };
};

export default useProductHandlers;
