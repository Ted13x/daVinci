import { useState } from "react";
import axios from "axios";

const useCategoryListHandlers = (initialState) => {
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategory] = useState(null);
  const [subSubCategory, setSubSubCategory] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  //   const handleChange = (e) => {
  //     setCategories({ ...categories, [e.target.name]: e.target.value });
  // };

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/proxy/category');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  return {
    // handleChange,
    categories,
    subCategory,
    subSubCategory,
    getCategories,
    isLoading,
  };
};

export default useCategoryListHandlers;
