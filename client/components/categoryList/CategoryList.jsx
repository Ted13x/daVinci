import React from "react";

const CategoryList = ({ categories, isLoading }) => {

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h3>List:</h3>
      <br/>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id}>
            <li>
              <p>{category.name}</p>
            </li>
          </div>
            ))): (
              <p>No categories found</p>
            )}
    </div>
  );
};

export default CategoryList;
