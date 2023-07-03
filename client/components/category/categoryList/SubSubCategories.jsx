import React, { useState } from "react";
import styles from '../../../styles/Home.module.scss'

const SubSubCategories = ({ 
    handleSubSubCategoryClick,
    existingSubSubCategories,
    selectedSubCategory,
    handleNewSubSubCategoryClick,
    newSubSubCategoryState,
    setNewSubSubCategory,
    handleAddNewSubSubCategory,
    newSubSubCategory,
    updateSubSubCategory,
    removeSubSubCategory,
}) => {
  const [editingSubSubCategory, setEditingSubSubCategory] = useState(null);
  const [updatedSubSubCategory, setUpdatedSubSubCategory] = useState('');

  const handleUpdateClick = (subSubCategory) => {
    setEditingSubSubCategory(subSubCategory._id);
    setUpdatedSubSubCategory(subSubCategory.name);
  };

  const handleCancelClick = () => {
    setEditingSubSubCategory(null);
    setUpdatedSubSubCategory('');
  };

  const handleSaveClick = (subSubCategoryId) => {
    updateSubSubCategory(subSubCategoryId, updatedSubSubCategory);
    setEditingSubSubCategory(null);
    setUpdatedSubSubCategory('');
  };

  const handleRemoveClick = (subSubCategoryId) => {
    if (window.confirm('Are you sure you want to remove this category and all its subcategories?')) {
        removeSubSubCategory(subSubCategoryId);
    }
  };

  return (
    <div>
    { selectedSubCategory ? (
    <div>
       { existingSubSubCategories.length > 0 ? (
        <div>
        <h4>Sub sub categories</h4>
        <br/>
        {existingSubSubCategories.map((subSubCategory) => (
          <div className={styles.categoryContainer} key={subSubCategory._id}>
            <li>
              {editingSubSubCategory === subSubCategory._id ? (
                <input 
                  type="text"
                  value={updatedSubSubCategory}
                  onChange={(e) => setUpdatedSubSubCategory(e.target.value)}
                />
              ) : (
                <button  onClick={() => handleSubSubCategoryClick(subSubCategory._id)}>{subSubCategory.name}</button>
              )}
            </li>
            {editingSubSubCategory === subSubCategory._id ? (
              <>
                <button className={styles.ctaBtn} onClick={() => handleSaveClick(subSubCategory._id)}>Save</button>
                <button className={styles.ctaBtn} onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <button className={styles.ctaBtn} onClick={() => handleUpdateClick(subSubCategory)}>Update</button>
                <button className={styles.ctaBtn} onClick={() => handleRemoveClick(subSubCategory._id)}>Remove</button>
              </>
            )}
          </div>
            ))}
          </div>
            ): (
                <div>
                <p>The selected sub category doesn't hold a child</p>
                <br/>
                </div>
      )}
      { newSubSubCategoryState ? (
       <div>
        <input type="text" placeholder="Enter new category name" 
        value={newSubSubCategory}
        onChange={(e) => setNewSubSubCategory(e.target.value)}
        />
        <button onClick={() => handleAddNewSubSubCategory(newSubSubCategory)}>Create</button>
     </div>
      ): (
        <button onClick={() => handleNewSubSubCategoryClick()}>+ sub sub</button>
      )}
    </div>
    ): (
        null
    )}
    </div>
  );
};

export default SubSubCategories;
