import { useState } from "react";

const useProductHandlers = (initialState) => {
    const [product, setProduct] = useState(initialState);

      // change handler for all fields
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
  };
};

export default useProductHandlers;
