import React, { useState } from "react";

// TODO: add new category, sub category, sub sub category functionality

const CategoryList = ({ 
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
}) => {

  const [newCategoryState, setNewCategoryState] = useState(false);

  const handleNewAddCategoryClick = () => {
    console.log('clicked add category');
    setNewCategoryState(true);
  }

  return (
    <div>
      <h3>List:</h3>
      <br/>
      <p>Main categories</p>
      {existingCategories && existingCategories.length > 0 ? (
        existingCategories.map((category) => (
          <div key={category._id}>
            <li>
              <button onClick={() => handleCategoryClick(category._id)} >{category.name}</button>
            </li>
          </div>
            ))): (
              <p>No categories found</p>
            )
      }
      <br/>
      { !selectedCategory && selectedCategory.length === 0 ? (
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
          <button onClick={() => handleNewAddCategoryClick()}>+ main</button>
        )}
        </div>
      ): (
        null
      )}

      { selectedCategory ? (
      <p>Sub categories</p>
          ): selectedCategory.length > 0 && existingSubCategories && existingSubCategories.length > 0 ? (
        <div>
        {existingSubCategories.map((subCategory) => (
          <div key={subCategory._id}>
            <li>
              <button onClick={() => handleSubCategoryClick(subCategory._id)} >{subCategory.name}</button>
            </li>
          </div>
            ))}
          </div>
            ): ( null
              )}
       <br/>
      { selectedCategory ? (
        <div> 
              
        <button onClick={() => handleCategoryClick('newSubCategory')}>+ sub</button>
        </div>
      ): (
        null
      )}
      { selectedSubCategory.length > 0 && existingSubSubCategories && existingSubSubCategories.length > 0 ? (
        <div>
        <p>Sub sub categories</p>
        {existingSubSubCategories.map((subSubCategory) => (
          <div key={subSubCategory._id}>
            <li>
              <button>{subSubCategory.name}</button>
            </li>
          </div>
            ))}
            <br/>
             <button onClick={() => handleCategoryClick('newSubCategory')}>+ sub sub</button>
          </div>
            ): (
              null
      )}
    </div>
  );
};

export default CategoryList;
