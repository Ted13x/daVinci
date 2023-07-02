import React, { useState } from "react";
import styles from '../../../styles/Home.module.scss'

const MainCategories = ({ 
  handleCategoryClick,
  handleAddNewCategory,
  existingCategories, 
  selectedCategory,
  newCategory,
  newCategoryState,
  setNewCategory,
  setSelectedCategory,
  handleNewCategoryClick,
}) => {


  return (
    <div>
      <h4>Main categories</h4>
      <br />
      {existingCategories && existingCategories.length > 0 ? (
        existingCategories.map((category) => (
          <div className={styles.categoryContainer} key={category._id}>
            <li>
              <button 
              className={selectedCategory === category._id ? (styles.buttonSelected) : ''}
              onClick={() => handleCategoryClick(category._id)} >{category.name}</button>
            </li>
            <button className={styles.ctaBtn}>update</button>
            <button className={styles.ctaBtn}>remove</button>
          </div>
            ))): (
              <p>No categories found</p>
            )
      }
        <div>
          {newCategoryState ? (
            <div>
              <input type="text" placeholder="Enter new category name" 
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              />
              <button onClick={() => handleAddNewCategory(newCategory)}>Create</button>
            </div>
          ) : (
          <button onClick={() => handleNewCategoryClick()}>+ main</button>
        )}
        </div>
    </div>
  );
};

export default MainCategories;
