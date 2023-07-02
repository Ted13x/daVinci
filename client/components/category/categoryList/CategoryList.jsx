import React from "react";

// TODO: add new category, sub category, sub sub category functionality

const CategoryList = ({ 
  handleCategoryClick,
  handleSubCategoryClick,
  existingCategories, 
  existingSubCategories,
  existingSubSubCategories,
  selectedCategory,
  selectedSubCategory,
}) => {

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
        <button onClick={() => handleCategoryClick('newCategory')}>+ main</button>
      ): (
        null
      )}

      { selectedCategory && selectedCategory.length > 0 && existingSubCategories && existingSubCategories.length > 0 ? (
        <div>
        <p>Sub categories</p>
        {existingSubCategories.map((subCategory) => (
          <div key={subCategory._id}>
            <li>
              <button onClick={() => handleSubCategoryClick(subCategory._id)} >{subCategory.name}</button>
            </li>
          </div>
            ))}
          </div>
            ): (
              <p>No sub categories found</p>
      )}
       <br/>
      { selectedCategory ? (
        <button onClick={() => handleCategoryClick('newSubCategory')}>+ sub</button>
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
