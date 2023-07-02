import React, { useEffect, useState, useContext } from 'react';
import styles from '../styles/Home.module.scss'
import CategoryForm from '../components/categoryForm/CategoryForm.jsx'; 
import CategoryList from '@/components/categoryList/CategoryList.jsx';
import useCategoryListHandlers from '../components/categoryList/useCategoryListHandlers';



const Category = () => {

    const {
        getCategories,
        categories,
        isLoading,
    } = useCategoryListHandlers();  

    // fetch existingCategories
  useEffect(() => {
      getCategories();
    if (!categories) {
      console.log('No categories found')
    } else  {
      console.log('Categories found:', categories)
    }
  }, []);
  
  if (isLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        
      </div>
        <CategoryList categories={categories} />
        <CategoryForm categories={categories} isLoading={isLoading}/>
    </div>
  );
}

export default Category;
