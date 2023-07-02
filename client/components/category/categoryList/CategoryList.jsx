import React from "react";

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
      )}
      { selectedCategory.length > 0 && existingSubCategories && existingSubCategories.length > 0 ? (
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
          </div>
            ): (
              null
      )}
    </div>
  );
};

export default CategoryList;
