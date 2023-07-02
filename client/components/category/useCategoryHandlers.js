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

    const [newCategory, setNewCategory] = useState('');
    const [newSubCategory, setNewSubCategory] = useState('');
    const [newSubSubCategory, setNewSubSubCategory] = useState('');


  //   const handleChange = (e) => {
  //     setCategories({ ...categories, [e.target.name]: e.target.value });
  // };

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
    setSelectedSubCategory('');
    await getSubCategoriesOfSelectedCategory();
  };

  const handleSubCategoryClick = async (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
    await getSubCategoriesOfSelectedSubCategory();
  };
  
  // *********** ADD NEW CATEGORIES ***********
  const handleAddNewCategory = (e) => {
    if (newCategory === '' && selectedCategory === '') {
        alert("Please insert a category name or select an existing one.");
    } else {
    setNewCategory(e.target.value);
    setSelectedCategory('');
    console.log(newCategory);
  };
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

  return {
    // handleChange,
    handleCategoryClick,
    handleSubCategoryClick,
    existingCategories,
    existingSubCategories,
    existingSubSubCategories,
    selectedCategory,
    selectedSubCategory,
    setSelectedCategory,
    setSelectedSubCategory,
    getCategories,
    getSubCategoriesOfSelectedCategory,
    getSubCategoriesOfSelectedSubCategory,
    isLoading,
  };
};

export default useCategoryHandlers;