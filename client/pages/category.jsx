import React, { useEffect } from 'react';
import styles from '../styles/Home.module.scss'
import CategoryList from '@/components/category/categoryList/CategoryList.jsx';
import useCategoryHandlers from '../components/category/useCategoryHandlers.js';

const Category = () => {

    const {
        getCategories,
        handleCategoryClick,
        handleSubCategoryClick,
        handleAddNewCategory,
        existingCategories,
        existingSubCategories,
        existingSubSubCategories,
        selectedCategory,
        selectedSubCategory,
        newCategory,
        setNewCategory,
        isCreating,
        isLoading,
    } = useCategoryHandlers();  

 useEffect(() => {
    getCategories();
    }, []);

useEffect(() => {
    getCategories();
}, [isCreating]);

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className={styles.mainContainer}>
        <CategoryList 
            handleCategoryClick={handleCategoryClick}
            handleSubCategoryClick={handleSubCategoryClick}
            handleAddNewCategory={handleAddNewCategory}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            existingCategories={existingCategories} 
            existingSubCategories={existingSubCategories}
            existingSubSubCategories={existingSubSubCategories} 
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            />
    </div>
  );
}

export default Category;
