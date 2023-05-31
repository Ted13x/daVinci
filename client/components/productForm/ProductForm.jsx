import React from "react";
import axios from "axios";
import styles from "../../styles/ProductForm.module.scss";
import useProductHandlers from './useProductFormHandlers';
import BaseFormFields from './BaseFormFields';
import PriceFormFields from './PriceFormFields';
import ImageFormFields from './ImageFormFields';
import VideoFormFields from './VideoFormFields';
import MaterialFormFields from './MaterialFormFields';

const ProductForm = () => {

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
  }

  const {
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
  } = useProductHandlers(productProperties);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { prices, ...productWithoutPrices } = product;
    prices = prices.map((price) => {
      if (price.priceType !== 'b2_i') {
        const { userId, ...priceWithoutUserId } = price;
        return priceWithoutUserId;
      }
      return price;
    });
    const finalProduct = { ...productWithoutPrices, prices };

    try {
      await axios.post("http://localhost:8001/api/product/create", finalProduct);
      alert("Product created successfully!");
      setProduct(productProperties);
    } catch (error) {
      alert("There was a problem creating the product.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}> 
        <form onSubmit={handleSubmit}>
          <BaseFormFields product={product} handleChange={handleChange} />

          <PriceFormFields 
            prices={product.prices}
            handlePriceChange={handlePriceChange}
            handleAddPrice={handleAddPrice}
            handleRemovePrice={handleRemovePrice}
          />

          <ImageFormFields 
            images={product.images} 
            handleImageChange={handleImageChange} 
            handleRemoveImage={handleRemoveImage}
          />

          <VideoFormFields
            videos={product.videos}
            handleVideoChange={handleVideoChange}
            handleRemoveVideo={handleRemoveVideo}
          />

          <MaterialFormFields
            materials={product.materials}
            handleMaterialChange={handleMaterialChange}
            handleRemoveMaterial={handleRemoveMaterial}
          />

          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
