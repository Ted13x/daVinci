import { useState, useContext, useEffect } from "react";
import { UserContext } from '../../context/UserContext.js';
import axios from "axios";

const useProductHandlers = (initialState) => {
  const [product, setProduct] = useState(initialState);
  const [lastAssignedCategory, setLastAssignedCategory] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [subsubcategory, setSubsubcategory] = useState(null);
  const [state, dispatch] = useContext(UserContext);
  const user_id = state.user_id;


    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
  };

    // price handlers
    const handlePriceChange = (index, event) => {
        const values = [...product.prices];
        if (event.target.name === "startDate" || event.target.name === "endDate") {
            values[index]["b2_d"][event.target.name] = event.target.value;
        } else {
            values[index][event.target.name] = event.target.value;
        }
        setProduct({ ...product, prices: values });
        };

    const handleAddPrice = () => {
    setProduct({
        ...product,
        prices: [
        ...product.prices,
        { priceType: "", value: "", quantity: 1, b2_d: { startDate: "", endDate: "" }, userId: "" },
        ],
    });
    };

    const handleRemovePrice = (index) => {
        const values = [...product.prices];
        values.splice(index, 1);
        setProduct({ ...product, prices: values });
    };

   // image handlers
    const handleImageChange = (index, event) => {
        const values = [...product.images];
        values[index][event.target.name] = event.target.value;
        setProduct({ ...product, images: values });
    };
    
    const handleAddImage = () => {
        setProduct({
        ...product,
        images: [...product.images, { url: "", size: "", format: "" }],
        });
    };
  
    const handleRemoveImage = (index) => {
        const values = [...product.images];
        values.splice(index, 1);
        setProduct({ ...product, images: values });
    };

    // video handlers
    const handleVideoChange = (index, event) => {
        const values = [...product.videos];
        values[index][event.target.name] = event.target.value;
        setProduct({ ...product, videos: values });
    };
    
    const handleAddVideo = () => {
        setProduct({
        ...product,
        videos: [...product.videos, { url: "", size: "", type: "" }],
        });
    };
    
    const handleRemoveVideo = (index) => {
        const values = [...product.videos];
        values.splice(index, 1);
        setProduct({ ...product, videos: values });
    };

  // material handlers
  const handleMaterialChange = (index, event) => {
    const values = [...product.materials];
    values[index][event.target.name] = event.target.value;
    setProduct({ ...product, materials: values });
  };
  
  const handleAddMaterial = () => {
    setProduct({
      ...product,
      materials: [...product.materials, { name: "", percentage: "" }],
    });
  };
  
  const handleRemoveMaterial = (index) => {
    const values = [...product.materials];
    values.splice(index, 1);
    setProduct({ ...product, materials: values });
  };


// category handlers

  // Funktionen zur Erstellung von Kategorien, Unterkategorien und Unterunterkategorien
  const createCategory = async (categoryName) => {
    try {
      const response = await axios.post('/api/category/createCategory', { name: categoryName });
      setCategory(response.data.category);
    } catch (err) {
      console.error(err);
    }
  };

  const createSubcategory = async (subcategoryName, parentId) => {
    try {
      const response = await axios.post('/api/category/createSubcategory', { name: subcategoryName, parent: parentId });
      setSubcategory(response.data.subcategory);
    } catch (err) {
      console.error(err);
    }
  };

  const createSubSubcategory = async (subsubcategoryName, parentId) => {
    try {
      const response = await axios.post('/api/category/createSubSubcategory', { name: subsubcategoryName, parent: parentId });
      setSubsubcategory(response.data.subsubcategory);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddCategoriesToDatabase = async ({ category, subcategory, subsubcategory }) => {
    try {
      let lastCreatedCategoryId = null;

      if (category) {
        const createdCategory = await axios.post('/api/proxy/category/create', { name: category });
        lastCreatedCategoryId = createdCategory.data._id;
      }

      if (subcategory) {
        const createdSubcategory = await axios.post('/api/proxy/category/create', { name: subcategory, parent: lastCreatedCategoryId });
        lastCreatedCategoryId = createdSubcategory.data._id;
      }

      if (subsubcategory) {
        const createdSubSubcategory = await axios.post('/api/proxy/category/create', { name: subsubcategory, parent: lastCreatedCategoryId });
        lastCreatedCategoryId = createdSubSubcategory.data._id;
      }

      setLastAssignedCategory(lastCreatedCategoryId);
      return true;
    } catch (error) {
      console.error('Error while creating categories:', error);
      return false;
    }
  };

  // Funktion zur Erstellung des Produkts
  const createProduct = async (productData) => {
    try {
      // Die ID der letzten zugewiesenen Kategorie (Kategorie, Unterkategorie oder Unterunterkategorie) wird für das Produkt verwendet
      const categoryId = subsubcategory ? subsubcategory._id : (subcategory ? subcategory._id : category._id);
      const response = await axios.post('/api/product/createProduct', { ...productData, category: categoryId });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    product,
    setProduct,
    handleChange,
    handlePriceChange,
    handleAddPrice,
    handleRemovePrice,

    handleImageChange,
    handleAddImage,
    handleRemoveImage,

    handleVideoChange,
    handleAddVideo,
    handleRemoveVideo,

    handleMaterialChange,
    handleAddMaterial,
    handleRemoveMaterial,

    category,
    subcategory,
    subsubcategory,
    createCategory,
    createSubcategory,
    createSubSubcategory,
    createProduct,
    lastAssignedCategory,
  };
};

export default useProductHandlers;
