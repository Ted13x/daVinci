import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryFormFields = ({
  // handleAddCategoriesToDatabase,
  categories,
  category,
  subcategory,
  subsubcategory,
  createCategory,
  createSubCategory,
  createSubSubcategory,
}) => {
  // data fetch states
  const [existingCategories, setCategories] = useState([]);
  const [existingSubCategories, setSubCategories] = useState([]);
  const [existingSubSubcategories, setSubSubCategories] = useState([]);
  // existing selected states
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState('');
  // new created category states
  const [newCategory, setNewCategory] = useState('');
  const [newSubCategory, setNewSubCategory] = useState('');
  const [newSubSubCategory, setNewSubSubCategory] = useState('');

  // fetch existingCategories
//   useEffect(() => {
//       const fetchCategories = async () => {
//         const response = await axios.get('/api/proxy/category/');
//         setCategories(response.data);
//       };
//     fetchCategories();
//   }, []);
  // fetch existingSubCategories
//   const fetchSubCategories = async () => {
//     const response = await axios.post('/api/proxy/category/sub/ofCategory', { category: selectedCategory });
//     setSubCategories(response.data);
//   };
  // fetch existingSubSubCategories
//   const fetchSubSubCategories = async () => {
//     const response = await axios.post('/api/proxy/category/sub/sub/ofSubCategory', { subcategory: selectedSubCategory });
//     setSubSubCategories(response.data);
//   };

  // handle selection of category:
  // if user selects existing category
  const handleExistingCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    fetchSubCategories();
    setNewSubCategory('');
    setNewSubSubCategory('');
  };
  // if user adds new category
  const handleAddNewCategory = (e) => {
    if (newCategory === '' && selectedCategory === '') {
        alert("Please insert a category name or select an existing one.");
    } else {
    setNewCategory(e.target.value);
    setSelectedCategory('');
    console.log(newCategory);
  };
};

  // if user selects existing subcategory
  const handleExistingSubcategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
    //fetchSubSubCategories();
  };
  // if user adds new subcategory
  const handleAddSubcategory = () => {
    if (newSubCategory === '' && selectedSubCategory === '') {
        alert("Please insert a category name or select an existing one.");
    } else {
    createSubCategory(newSubCategory, category._id);
    setSelectedSubCategory(newSubCategory);
    setNewSubCategory(e.target.value);
    console.log(newSubCategory);
    }
  };

  // if user selects existing subsubcategory
  const handleSubSubCategoryChange = (e) => {
    setSelectedSubSubCategory(e.target.value);
  };
  // if user adds new subsubcategory
  const handleAddSubSubCategory = () => {
    if (newSubSubCategory === '' && selectedSubSubCategory === '') {
        alert("Please insert a category name or select an existing one.");
        createSubSubcategory(newSubSubCategory, subcategory._id);
        setSelectedSubSubCategory(newSubSubCategory);
        setNewSubSubCategory('');
        console.log(newSubSubCategory);  
    }
  };

//   const handleSaveCategories = () => {
//     handleAddCategoriesToDatabase({
//       category: selectedCategory || newCategory,
//       subcategory: selectedSubCategory || newSubCategory,
//       subsubcategory: selectedSubSubCategory || newSubSubCategory,
//     });
//   };

  return (
    <div>
      {/* Category */}
      {categories.length != 0 && 
      <select onChange={handleExistingCategoryChange} value={selectedCategory}>
        <option disabled selected value="">Select category</option>
        { categories.map((category, index) => (
          <option key={index} value={category.name}>{category.name}</option>
        ))}
      </select>
      }
      <input
        type="text"
        placeholder="New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={handleAddNewCategory}>Add Category</button>
        <br/>
      {/* Subcategory */}
      {selectedCategory || newCategory && 
      <div>
      {existingSubCategories.length != 0 &&
      <select onChange={handleExistingSubcategoryChange} value={selectedSubCategory}>
        <option disabled selected value="">Select subcategory</option>
        {existingSubCategories.map((subcategory, index) => (
          <option key={index} value={subcategory.name}>{subcategory.name}</option>
        ))}
      </select>
      }
      <input
        type="text"
        placeholder="New Subcategory"
        value={newSubCategory}
        onChange={(e) => setNewSubCategory(e.target.value)}
      />
      <button onClick={handleAddSubcategory}>Add Subcategory</button>
      </div>
        }
      <br/>
      {/* Subsubcategory */}
      {selectedSubCategory || newSubCategory &&
      <div>
      {existingSubSubcategories.length != 0 &&
      <select onChange={handleSubSubCategoryChange} value={selectedSubSubCategory}>
        <option disabled selected value="">Select subsubcategory</option>
        {existingSubSubcategories.map((subsubcategory, index) => (
          <option key={index} value={subsubcategory.name}>{subsubcategory.name}</option>
        ))}
      </select>
        }
      <input
        type="text"
        placeholder="New Subsubcategory"
        value={newSubSubCategory}
        onChange={(e) => setNewSubSubCategory(e.target.value)}
      />
      <button onClick={handleAddSubSubCategory}>Add Subsubcategory</button>
      </div>
        }
    </div>
  );
};

export default CategoryFormFields;
