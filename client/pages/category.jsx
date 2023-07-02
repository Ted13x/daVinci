import React, { useEffect } from 'react';
import styles from '../styles/Category.module.scss'
import MainCategories from '@/components/category/categoryList/MainCategories.jsx';
import SubCategories from '@/components/category/categoryList/SubCategories.jsx';
import SubSubCategories from '@/components/category/categoryList/SubSubCategories.jsx';
import useCategoryHandlers from '../components/category/useCategoryHandlers.js';

const Category = () => {

    const {
        getCategories,
        getSubCategoriesOfSelectedCategory,
        getSubCategoriesOfSelectedSubCategory,
        handleCategoryClick,
        handleSubCategoryClick,
        handleSubSubCategoryClick,
        handleAddNewCategory,
        handleNewSubCategoryClick,
        handleAddNewSubCategory,
        existingCategories,
        existingSubCategories,
        existingSubSubCategories,
        selectedCategory,
        selectedSubCategory,
        newCategory,
        newSubCategory,
        newSubSubCategory,
        setNewCategory,
        setNewSubCategory,
        handleNewCategoryClick,
        newCategoryState,
        newSubCategoryState,
        newSubSubCategoryState,
        updateCategory,
        setSelectedCategory,
        isCreatingMain,
        isCreatingSub,
        isLoading,
        handleNewSubSubCategoryClick,
        handleNewSubSubCategory,
        setNewSubSubCategory,
        isCreatingSubSub,
    } = useCategoryHandlers();  

 useEffect(() => {
    getCategories();
    }, []);

useEffect(() => {
    getCategories();
}, [isCreatingMain]);

useEffect(() => {
    getSubCategoriesOfSelectedCategory(selectedCategory);
}, [isCreatingSub]);

useEffect(() => {
    getSubCategoriesOfSelectedSubCategory(selectedSubCategory);
}, [isCreatingSubSub]);

  return (
    <div className={styles.mainContainer}>
        <div className={styles.componentContainer}>
            <MainCategories
                handleCategoryClick={handleCategoryClick}
                handleAddNewCategory={handleAddNewCategory}
                handleNewCategoryClick={handleNewCategoryClick}
                existingCategories={existingCategories}
                selectedCategory={selectedCategory}
                newCategory={newCategory}
                setNewCategory={setNewCategory}
                newCategoryState={newCategoryState}
                isLoading={isLoading}
                setSelectedCategory={setSelectedCategory}
            />
        </div>
        <line/>
        <div className={styles.componentContainer}>
            <SubCategories
                handleSubCategoryClick={handleSubCategoryClick}
                selectedCategory={selectedCategory}
                existingSubCategories={existingSubCategories}
                selectedSubCategory={selectedSubCategory}
                isLoading={isLoading}
                handleNewSubCategoryClick={handleNewSubCategoryClick}
                newSubCategoryState={newSubCategoryState}
                setNewSubCategory={setNewSubCategory}
                handleAddNewSubCategory={handleAddNewSubCategory}
                newSubCategory={newSubCategory}
            />
        </div>
        <div className={styles.componentContainer}>
            <SubSubCategories
                selectedSubCategory={selectedSubCategory}
                existingSubSubCategories={existingSubSubCategories}
                handleNewSubSubCategoryClick={handleNewSubSubCategoryClick}
                newSubSubCategoryState={newSubSubCategoryState}
                handleAddNewSubSubCategory={handleNewSubSubCategory}
                newSubSubCategory={newSubSubCategory}
                handleSubSubCategoryClick={handleSubSubCategoryClick}
                setNewSubSubCategory={setNewSubSubCategory}
            />
        </div>
    </div>
  );
}

export default Category;
