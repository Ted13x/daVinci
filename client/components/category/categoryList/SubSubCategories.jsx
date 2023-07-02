import React from "react";
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
}) => {

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
              <button  onClick={() => handleSubSubCategoryClick(subSubCategory._id)}>{subSubCategory.name}</button>
            </li>
            <button className={styles.ctaBtn}>update</button>
            <button className={styles.ctaBtn}>remove</button>
          </div>
            ))}
          </div>
            ): (
                <div>
                <p>The selected sub category doesn't hold no child</p>
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
