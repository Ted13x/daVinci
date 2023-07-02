import { useState } from "react";
import axios from "axios";

const useCategoryHandlers = (initialState) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const [existingCategories, setExistingCategories] = useState([]);
    const [existingSubCategories, setExistingSubCategories] = useState([]);
    const [existingSubSubCategories, setExistingSubSubCategories] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedSubSubCategory, setSelectedSubSubCategory] = useState('');

    const [isCreating, setIsCreating] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [newSubCategory, setNewSubCategory] = useState('');
    const [newSubSubCategory, setNewSubSubCategory] = useState('');

  // *********** GET EXISTING CATEGORIES ***********
  const getCategories = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/proxy/category');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setExistingCategories(data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const getSubCategoriesOfSelectedCategory = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/proxy/category/sub/${selectedCategory}`);
      setExistingSubCategories(response.data);
      console.log('Returned sub categories', response.data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };
  
  const getSubCategoriesOfSelectedSubCategory = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/proxy/category/sub-sub/${selectedSubCategory}`);
      setExistingSubSubCategories(response.data);
      console.log('Returned sub sub categories', response.data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  // *********** CLICK HANDLERS ***********
  const handleCategoryClick = async (categoryId) => {
    setSelectedCategory(categoryId);
    await getSubCategoriesOfSelectedCategory();
    setSelectedSubCategory('');
  };

  const handleSubCategoryClick = async (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
    setSelectedSubSubCategory('');
    await getSubCategoriesOfSelectedSubCategory();
  };
  
  // *********** ADD NEW CATEGORIES ***********
  const createCategory = async (categoryName) => {
    try {
      const response = await axios.post('/api/proxy/category/create', { name: categoryName });
      setNewCategory(response.data.category);
      setIsCreating(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddNewCategory = (e) => {
      setSelectedCategory('');
      if (newCategory === '' && selectedCategory === '') {
          alert("Please insert a category name or select an existing one.");
        } else {
            createCategory(newCategory);
            setNewCategory('');
            setIsCreating(false);
  };
};

const createSubCategory = async (subCategoryName, parentId) => {
    try {
      const response = await axios.post('/api/category/sub/create', { name: subCategoryName, parent: parentId });
      setNewSubCategory(response.data.subCategory);
    } catch (err) {
      console.error(err);
    }
  };

const handleAddNewSubcategory = () => {
    if (newSubCategory === '' && selectedSubCategory === '') {
        alert("Please insert a category name or select an existing one.");
    } else {
    createSubCategory(newSubCategory, category._id);
    setSelectedSubCategory(newSubCategory);
    setNewSubCategory(e.target.value);
    console.log(newSubCategory);
    }
  };

  const createSubSubcategory = async (subsubcategoryName, parentId) => {
    try {
      const response = await axios.post('/api/category/createSubSubcategory', { name: subsubcategoryName, parent: parentId });
      setNewSubSubCategory(response.data.subSubCategory);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddNewSubSubCategory = () => {
    if (newSubSubCategory === '' && selectedSubSubCategory === '') {
        alert("Please insert a category name or select an existing one.");
        createSubSubcategory(newSubSubCategory, subcategory._id);
        setSelectedSubSubCategory(newSubSubCategory);
        setNewSubSubCategory('');
        console.log(newSubSubCategory);  
    }
  };

  const handleSaveCategories = () => {
    handleAddCategoriesToDatabase({
      category: selectedCategory || newCategory,
      subcategory: selectedSubCategory || newSubCategory,
      subsubcategory: selectedSubSubCategory || newSubSubCategory,
    });
  };

  // *********** UPDATE CATEGORIES ***********
    const updateCategory = async (categoryId, categoryName) => {
        try {
            const response = await axios.put(`/api/proxy/category/update/${categoryId}`, { name: categoryName });
            console.log('Updated category', response.data);
        } catch (err) {
            console.error(err);
        }
    };

  return {
    // handleChange,
    handleCategoryClick,
    handleSubCategoryClick,
    handleAddNewCategory,
    existingCategories,
    existingSubCategories,
    existingSubSubCategories,
    selectedCategory,
    selectedSubCategory,
    setSelectedCategory,
    setSelectedSubCategory,
    newCategory,
    isCreating,
    setNewCategory,
    getCategories,
    getSubCategoriesOfSelectedCategory,
    getSubCategoriesOfSelectedSubCategory,
    updateCategory,
    isLoading,
  };
};

export default useCategoryHandlers;
