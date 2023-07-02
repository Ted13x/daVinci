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
  updateCategory,
  setIsUpdatingCategoryState,
  removeCategoryWithAllChilds,
}) => {
  const [editingCategory, setEditingCategory] = useState(null);
  const [updatedCategoryName, setUpdatedCategoryName] = useState('');

  const handleUpdateClick = (categoryId, categoryName) => {
    setEditingCategory(categoryId);
    setUpdatedCategoryName(categoryName);
  };

  const handleCancelClick = () => {
    setEditingCategory(null);
    setUpdatedCategoryName('');
  };

  const handleSaveClick = (categoryId) => {
    updateCategory(categoryId, updatedCategoryName);
    setEditingCategory(null);
    setIsUpdatingCategoryState(true);
    setUpdatedCategoryName('');
  };

  const handleRemoveClick = (categoryId) => {
    if (window.confirm('Are you sure you want to remove this category and all its subcategories?')) {
      removeCategoryWithAllChilds(categoryId);
    }
  };

  return (
    <div>
      <h4>Main categories</h4>
      <br />
      {existingCategories && existingCategories.length > 0 ? (
        existingCategories.map((category) => (
          <div className={styles.categoryContainer} key={category._id}>
            <li>
              {editingCategory === category._id ? (
                <input 
                  type="text"
                  value={updatedCategoryName}
                  onChange={(e) => setUpdatedCategoryName(e.target.value)}
                />
              ) : (
                <button 
                  className={selectedCategory === category._id ? (styles.buttonSelected) : ''}
                  onClick={() => handleCategoryClick(category._id)}
                >
                  {category.name}
                </button>
              )}
            </li>
            {editingCategory === category._id ? (
              <>
                <button className={styles.ctaBtn} onClick={() => handleSaveClick(category._id)}>Save</button>
                <button className={styles.ctaBtn} onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <button className={styles.ctaBtn} onClick={() => handleUpdateClick(category._id, category.name)}>Update</button>
                <button className={styles.ctaBtn} onClick={() => handleRemoveClick(category._id)}>Remove</button>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No categories found</p>
      )}
      <div>
        {newCategoryState ? (
          <div>
            <input 
              type="text" 
              placeholder="Enter new category name" 
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button onClick={() => handleAddNewCategory(newCategory)}>Create</button>
          </div>
        ) : (
          <button onClick={() => handleNewCategoryClick()}>+ main</button>
        )}
      </div>
    </div  > );
};

export default MainCategories;
