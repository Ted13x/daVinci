import React, { useState } from "react";
import styles from '../../../styles/Home.module.scss'

const SubCategories = ({ 
  handleSubCategoryClick,
  existingSubCategories,
  selectedCategory,
  selectedSubCategory,
  handleNewSubCategoryClick,
  newSubCategoryState,
  setNewSubCategory,
  handleAddNewSubCategory,
  newSubCategory,
  updateSubCategory,
  removeSubCategoryWithAllChilds,
}) => {
  const [editingSubCategory, setEditingSubCategory] = useState(null);
  const [updatedSubCategory, setUpdatedSubCategory] = useState('');

  const handleUpdateClick = (subCategoryId, subCategoryName) => {
    setEditingSubCategory(subCategoryId);
    setUpdatedSubCategory(subCategoryName);
  };

  const handleCancelClick = () => {
    setEditingSubCategory(null);
    setUpdatedSubCategory('');
  };

  const handleSaveClick = (subCategoryId) => {
    updateSubCategory(subCategoryId, updatedSubCategory);
    setEditingSubCategory(null);
    setUpdatedSubCategory('');
  };


  const handleRemoveClick = (subCategoryId) => {
    if (window.confirm('Are you sure you want to remove this category and all its subcategories?')) {
        removeSubCategoryWithAllChilds(subCategoryId);
    }
  };

  return (
    <div>
        { selectedCategory ? (
    <div>
      { selectedCategory.length > 0  && existingSubCategories && existingSubCategories.length > 0 ? (
          
          <div>
            <h4>Sub categories</h4>
            <br />
            {existingSubCategories.map((subCategory) => (
          <div  className={styles.categoryContainer} key={subCategory._id}>
            <li>
              {editingSubCategory === subCategory._id ? (
                <input 
                  type="text"
                  value={updatedSubCategory}
                  onChange={(e) => setUpdatedSubCategory(e.target.value)}
                />
              ) : (
                <button 
                  className={selectedSubCategory === subCategory._id ? (styles.buttonSelected) : ''}
                  onClick={() => handleSubCategoryClick(subCategory._id)} >{subCategory.name}</button>
              )}
            </li>
            {editingSubCategory === subCategory._id ? (
              <>
                <button className={styles.ctaBtn} onClick={() => handleSaveClick(subCategory._id)}>Save</button>
                <button className={styles.ctaBtn} onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <button className={styles.ctaBtn} onClick={() => handleUpdateClick(subCategory._id, subCategory.name)}>Update</button>
                <button className={styles.ctaBtn} onClick={() => handleRemoveClick(subCategory._id)}>Remove</button>
              </>
            )}
          </div>
            ))}
          </div>
            ): ( <p>The selected category doesn't hold sub categories</p>
              )}
        <br/>
      { newSubCategoryState ? (
       <div>
        <input type="text" placeholder="Enter new category name" 
        value={newSubCategory}
        onChange={(e) => setNewSubCategory(e.target.value)}
        />
        <button onClick={() => handleAddNewSubCategory(newSubCategory)}>Create</button>
     </div>
      ): (
        <button onClick={() => handleNewSubCategoryClick()}>+ sub</button>
      )}
    </div>
        ): null}
    </div>
  );
};

export default SubCategories;
