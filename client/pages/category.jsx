import React, { useEffect } from 'react';
import styles from '../styles/Home.module.scss'
import CategoryForm from '../components/category/categoryForm/CategoryForm.jsx'; 
import CategoryList from '@/components/category/categoryList/CategoryList.jsx';
import useCategoryHandlers from '../components/category/useCategoryHandlers.js';

const Category = () => {

    const {
        getCategories,
        handleCategoryClick,
        handleSubCategoryClick,
        existingCategories,
        existingSubCategories,
        existingSubSubCategories,
        selectedCategory,
        selectedSubCategory,
        isLoading,
    } = useCategoryHandlers();  

 useEffect(() => {
    getCategories();
    }, []);

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className={styles.mainContainer}>
        <CategoryList 
            handleCategoryClick={handleCategoryClick}
            handleSubCategoryClick={handleSubCategoryClick}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            existingCategories={existingCategories} 
            existingSubCategories={existingSubCategories}
            existingSubSubCategories={existingSubSubCategories} 
            />
        {/* <CategoryForm 
            existingCategories={existingCategories} 
            setSelectedCategory={setSelectedCategory} /> */}
    </div>
  );
}

export default Category;
