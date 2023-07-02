import React from 'react';

const PriceFields = ({ prices, handleAddPrice, handlePriceChange, handleRemovePrice }) => {
    return (
        <>
            {prices.map((price, index) => (
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
              <button type="button" onClick={handleAddPrice}>Add Price</button>
              <br/>
              <button type="button" onClick={() => handleRemovePrice(index)}>Remove Price</button>
            </div>
          ))}
        </>
    );
}

export default PriceFields;