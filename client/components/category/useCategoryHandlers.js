import { useState } from "react";
import axios from "axios";

const useCategoryHandlers = (initialState) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const [existingCategories, setExistingCategories] = useState([]);
    const [existingSubCategories, setExistingSubCategories] = useState([]);
    const [existingSubSubCategories, setExistingSubSubCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedSubSubCategory, setSelectedSubSubCategory] = useState('');

    const [isCreatingMain, setIsCreatingMain] = useState(false);
    const [newCategoryState, setNewCategoryState] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [isCreatingSub, setIsCreatingSub] = useState(false);
    const [isCreatingSubSub, setIsCreatingSubSub] = useState(false);
    const [newSubCategory, setNewSubCategory] = useState('');
    const [newSubCategoryState, setNewSubCategoryState] = useState(false);
    const [newSubSubCategory, setNewSubSubCategory] = useState('');
    const [newSubSubCategoryState, setNewSubSubCategoryState] = useState(false);

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

  const getSubCategoriesOfSelectedCategory = async (categoryId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/proxy/category/sub/${categoryId}`);
      setExistingSubCategories(response.data);
      console.log('Returned sub categories', response.data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };
  
  const getSubCategoriesOfSelectedSubCategory = async (subCategoryId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/proxy/category/sub-sub/${subCategoryId}`);
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
    setSelectedSubSubCategory('');
    setNewCategoryState(false);
    await getSubCategoriesOfSelectedCategory(categoryId);
  };

  const handleSubCategoryClick = async (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
    setSelectedSubSubCategory('');
    setNewSubCategoryState(false);
    await getSubCategoriesOfSelectedSubCategory(subCategoryId);
  };

  const handleSubSubCategoryClick = async (subSubCategoryId) => {
    console.log('DEBUG - clicked sub sub category')
    setSelectedSubSubCategory(subSubCategoryId);
    setNewSubSubCategoryState(false);
    console.log('Selected sub sub category', subSubCategoryId);
  };
  
  // *********** ADD NEW CATEGORIES ***********
  const createCategory = async (categoryName) => {
    try {
      const response = await axios.post('/api/proxy/category/create', { name: categoryName });
      if (response.data.category !== undefined) {
        setNewCategory(response.data.category);
      } else {
        setNewCategory('');
      }
      setIsCreatingMain(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNewCategoryClick = () => {
    console.log('clicked add category');
    setSelectedCategory('');
    setNewCategoryState(true);
    setSelectedSubCategory('');
      setSelectedSubSubCategory('');
      setExistingSubCategories([]);
      setExistingSubSubCategories([]);
  };

  const handleAddNewCategory = (e) => {
      setSelectedCategory('');
      
      if (newCategory === '' && selectedCategory === '') {
          alert("Please insert a category name or select an existing one.");
        } else {
            createCategory(newCategory);
            setNewCategory('');
            setIsCreatingMain(false);
  };
};

 // *********** ADD NEW SUB CATEGORIES ***********
const createSubCategory = async (subCategoryName, parentId) => {
    try {
        const response = await axios.post('/api/proxy/category/sub/create', { name: subCategoryName, parentCategory: parentId });
        if (response.data.subCategory !== undefined) {
            setNewSubCategory(response.data.subCategory);
        } else {
            setNewSubCategory('');
        }
        setIsCreatingSub(true);
    } catch (err) {
        console.error(err);
    }
};

const handleNewSubCategoryClick = () => {
    setNewSubCategoryState(true);
    setSelectedSubCategory('');
    setExistingSubSubCategories([]);
  };

const handleAddNewSubCategory = () => {
    if (newSubCategory === '' && selectedSubCategory === '') {
        alert("Please insert a category name or select an existing one.");
    } else {
    createSubCategory(newSubCategory, selectedCategory);
    setSelectedSubCategory(newSubCategory);
    setNewSubCategory('');
    setIsCreatingSub(false);
    }
  };

   // *********** ADD NEW SUB SUB CATEGORIES ***********
  const createSubSubcategory = async (subSubcategoryName, parentId) => {
    try {
      const response = await axios.post('/api/proxy/category/sub-sub/create', { name: subSubcategoryName, parentCategory: parentId });
      if (response.data.subCategory !== undefined) {
      setNewSubSubCategory(response.data.subSubCategory);
    } else {
        setNewSubSubCategory('');
    }
    setIsCreatingSubSub(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNewSubSubCategoryClick = () => {
    console.log('DEBUG - clicked add sub sub category')
    setNewSubSubCategoryState(true);
  };

  const handleNewSubSubCategory = () => {
    if (newSubSubCategory === '' && selectedSubSubCategory === '') {
        alert("Please insert a category name or select an existing one.");
    } else {
        createSubSubcategory(newSubSubCategory, selectedSubCategory);
        setSelectedSubSubCategory(newSubSubCategory);
        setNewSubSubCategory('');
        setIsCreatingSubSub(false); 
    }
  };

  // *********** SAVE CATEGORIES WHILE PRODUCT CREATION ***********
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
    handleSubSubCategoryClick,
    handleAddNewCategory,
    handleAddNewSubCategory,
    handleNewSubCategoryClick,
    handleNewSubSubCategoryClick,
    handleNewSubSubCategory,
    existingCategories,
    existingSubCategories,
    existingSubSubCategories,
    selectedCategory,
    selectedSubCategory,
    setSelectedCategory,
    setSelectedSubCategory,
    newCategory,
    newSubCategory,
    isCreatingMain,
    isCreatingSub,
    setNewCategory,
    handleNewCategoryClick,
    newCategoryState,
    newSubCategoryState,
    newSubSubCategoryState,
    setNewSubCategory,
    setNewSubSubCategory,
    getCategories,
    getSubCategoriesOfSelectedCategory,
    getSubCategoriesOfSelectedSubCategory,
    updateCategory,
    isLoading,
    isCreatingSubSub,
    newSubSubCategory,
  };
};

export default useCategoryHandlers;
