import React, { useContext } from 'react';
import axios from "axios";
import styles from "../../../styles/ProductForm.module.scss";
import useProductHandlers from '../useProductFormHandlers';
import BaseFormFields from './BaseFormFields';
import PriceFormFields from './PriceFormFields';
import ImageFormFields from './ImageFormFields';
import VideoFormFields from './VideoFormFields';
import MaterialFormFields from './MaterialFormFields';
import CategoryFormFields from './CategoryFormFields';
import { UserContext } from '../../../context/UserContext.js';


// ToDo: set up product form
// ToDo: add file uploader

const ProductForm = () => {

  const [state, dispatch] = useContext(UserContext);
  const { user } = state;
  console.log('*** DEBUG ~ file: ProductForm.jsx:16 ~ ProductForm ~ user:', user);

  const productProperties = {
    name: "",
    description: "",
    prices: [
      {
        priceType: "",
        value: "",
        quantity: 1,
        b2_d: { startDate: "", endDate: "" },
        userId: "",
      },
    ],
    images: [{ url: "", size: "", format: "" }],
    videos: [{ url: "", size: "", type: "" }],
    materials: [{ name: "", percentage: "" }],
    category: null,
    subcategory: null,
    subsubcategory: null,
  }

  const {
    product,
    categories,
    subcategories,
    subsubcategories,
    handleChange,
    setProduct,
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
    handleAddCategoriesToDatabase,
    createCategory,
    createSubcategory,
    createSubSubcategory,
  } = useProductHandlers(productProperties);

  console.log(useProductHandlers(productProperties))

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
        alert('User data is not available. Please try again.');
        return;
    }

    await handleAddCategoriesToDatabase({
      category: product.category,
      subcategory: product.subcategory,
      subsubcategory: product.subsubcategory,
    });

    const finalProduct = {
      ...product,
      prices: product.prices.map((price) => {
        if (price.priceType !== 'b2_i') {
          const { userId, ...priceWithoutUserId } = price;
          return priceWithoutUserId;
        }
        return price;
      }),
      createdBy: user.id
    };

    try {
      await axios.post("/api/proxy/product/create", finalProduct);
      alert("Product created successfully!");
      setProduct(productProperties);
    } catch (error) {
      alert("There was a problem creating the product.");
    }
  };

  const handleCategoryChange = (e) => {
    handleChange({ ...product, category: e.target.value });
  };
  
  const handleSubcategoryChange = (e) => {
    handleChange({ ...product, subcategory: e.target.value });
  };
  
  const handleSubSubcategoryChange = (e) => {
    handleChange({ ...product, subsubcategory: e.target.value });
  };
  

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}> 
        <form onSubmit={handleSubmit}>
        <p>************* BASE ****************</p>
          <BaseFormFields product={product} handleChange={handleChange} />
          <p>************* PRICES ****************</p>
          <PriceFormFields 
            prices={product.prices}
            handlePriceChange={handlePriceChange}
            handleAddPrice={handleAddPrice}
            handleRemovePrice={handleRemovePrice}
          />
          <p>************* IMAGES ****************</p>
          <ImageFormFields 
            images={product.images} 
            handleImageChange={handleImageChange}
            handleAddImage={handleAddImage}
            handleRemoveImage={handleRemoveImage}
          />
          <p>************* CATEGORIES ****************</p>
          <CategoryFormFields
            product={product}
            handleCategoryChange={handleCategoryChange}
            handleSubcategoryChange={handleSubcategoryChange}
            handleSubSubcategoryChange={handleSubSubcategoryChange}
            createCategory={createCategory}
            createSubcategory={createSubcategory}
            createSubSubcategory={createSubSubcategory}
          />
          <p>************* VIDEOS ****************</p>
          <VideoFormFields
            videos={product.videos}
            handleVideoChange={handleVideoChange}
            handleRemoveVideo={handleRemoveVideo}
          />
          <p>************* MATERIALS ****************</p>
          <MaterialFormFields
            materials={product.materials}
            handleMaterialChange={handleMaterialChange}
            handleRemoveMaterial={handleRemoveMaterial}
          />
          <p>************* END ****************</p>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
