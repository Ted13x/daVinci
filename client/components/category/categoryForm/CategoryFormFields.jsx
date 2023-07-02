import React, { useState } from "react";

const CategoryFormFields = ({
  existingCategories,
  setSelectedCategory,
}) => {

  // if user selects existing category
  const handleExistingCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log('DEBUG selected category:', e.target.value);
    // fetchSubCategories();
    // setNewSubCategory('');
    // setNewSubSubCategory('');
  };
 

  return (
    <div>
      {/* Category */}
      {existingCategories.length != 0 && 
      <select onChange={handleExistingCategoryChange}>
        <option disabled selected value="">Select category</option>
        { existingCategories.map((category, index) => (
          <option key={index} value={category.name}>{category.name}</option>
        ))}
      </select>
      }
    </div>
  );
};

export default CategoryFormFields;
