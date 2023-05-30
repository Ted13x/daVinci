import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Product.module.scss";

const Product = () => {
  const [product, setProduct] = useState({
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
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

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
      setProduct({
        name: "",
        description: "",
        prices: [{ priceType: "", value: "", quantity: 1, b2_d: { startDate: "", endDate: "" }, userId: "" }],
      });
    } catch (error) {
      alert("There was a problem creating the product.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}> 
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <br/>
            <input type="text" name="name" value={product.name} onChange={handleChange} required />
          </label>
          <label>
            Description:
            <br/>
            <textarea type="text" name="description" value={product.description} onChange={handleChange} required />
          </label>

          {product.prices.map((price, index) => (
            <div key={index}>
              <br/>
              <h4>Price #{index + 1}</h4>
              <label>
                PriceType:
                <br/>
                <select name="priceType" value={price.priceType} onChange={(e) => handlePriceChange(index, e)} required>
                  <option value="">--Select a type--</option>
                  <option value="b2b_g">B2B generally</option>
                  <option value="b2c_g">B2C generally</option>
                  <option value="b2_i">B2 individual</option>
                  <option value="b2_a">b2 action</option>
                </select>
              </label>
              <label>
              <br/>
                Value:
                <br/>
                <input type="number" name="value" value={price.value} onChange={(e) => handlePriceChange(index, e)} required />
              </label>
              <label>
                Quantity:
                <input type="number" name="quantity" value={price.quantity} onChange={(e) => handlePriceChange(index, e)} required />
              </label>
              <label>
                B2D Start Date:
                <input type="date" name="startDate" value={price.b2_d.startDate} onChange={(e) => handlePriceChange(index, e)} />
              </label>
              <label>
                B2D End Date:
                <input type="date" name="endDate" value={price.b2_d.endDate} onChange={(e) => handlePriceChange(index, e)} />
              </label>
              {price.priceType === "b2_i" && (
                <label>
                  UserId:
                  <input type="text" name="userId" value={price.userId} onChange={(e) => handlePriceChange(index, e)} />
                </label>
              )}
              <br/>
              <button type="button" onClick={() => handleRemovePrice(index)}>Remove Price</button>
            </div>
          ))}

          <button type="button" onClick={handleAddPrice}>Add Price</button>

          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default Product;
