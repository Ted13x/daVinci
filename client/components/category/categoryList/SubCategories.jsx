import React from "react";
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
}) => {

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
              <button 
              className={selectedSubCategory === subCategory._id ? (styles.buttonSelected) : ''}
              onClick={() => handleSubCategoryClick(subCategory._id)} >{subCategory.name}</button>
            </li>
            <button className={styles.ctaBtn}>update</button>
            <button className={styles.ctaBtn}>remove</button>
          </div>
            ))}
          </div>
            ): ( <p>The selected category doesn't hold no sub categories</p>
              )}
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
