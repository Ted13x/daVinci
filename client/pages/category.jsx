import React, { useEffect } from 'react';
import styles from '../styles/Category.module.scss'
import MainCategories from '@/components/category/categoryList/MainCategories.jsx';
import SubCategories from '@/components/category/categoryList/SubCategories.jsx';
import SubSubCategories from '@/components/category/categoryList/SubSubCategories.jsx';
import useCategoryHandlers from '../components/category/useCategoryHandlers.js';

// ToDo: finish remove functionality for sub and subsub categories
// ToDo: add handler and states to useHandler file

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
        setSelectedCategory,
        isCreatingMain,
        isCreatingSub,
        isLoading,
        handleNewSubSubCategoryClick,
        handleNewSubSubCategory,
        setNewSubSubCategory,
        isCreatingSubSub,
        updateCategory,
        updateSubCategory,
        updateSubSubCategory,
        isUpdatingCategoryState,
        setIsUpdatingCategoryState,
        isUpdatingSubCategoryState,
        setIsUpdatingSubCategoryState,
        isUpdatingSubSubCategoryState,
        setIsUpdatingSubSubCategoryState,
        removeCategoryWithAllChilds,
        removeSubCategoryWithAllChilds,
        removeSubSubCategory,
    } = useCategoryHandlers();  

 useEffect(() => {
    getCategories();
    }, []);

useEffect(() => {
    if (isCreatingMain || isUpdatingCategoryState === true) {
    getCategories();}
}, [isCreatingMain, isUpdatingCategoryState]);

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
                updateCategory={updateCategory}
                setIsUpdatingCategoryState={setIsUpdatingCategoryState}
                removeCategoryWithAllChilds={removeCategoryWithAllChilds}
            />
        </div>
        
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
                updateSubCategory={updateSubCategory}
                removeSubCategoryWithAllChilds={removeSubCategoryWithAllChilds}
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
                updateSubSubCategory={updateSubSubCategory}
                removeSubSubCategory={removeSubSubCategory}
            />
        </div>
    </div>
  );
}

export default Category;
