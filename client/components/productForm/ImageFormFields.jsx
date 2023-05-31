import React from 'react';

const ImageFields = ({ images, handleAddPrice, handleImageChange, handleRemoveImage }) => {
  return (
    <>
      {images.map((image, index) => (
        <div key={index}>
          <br/>
          <h4>Image #{index + 1}</h4>
          <label>
            URL:
            <br/>
            <input type="text" name="url" value={image.url} onChange={(e) => handleImageChange(index, e)} required />
          </label>
          <label>
            Size:
            <br/>
            <input type="text" name="size" value={image.size} onChange={(e) => handleImageChange(index, e)} required />
          </label>
          <label>
            Format:
            <br/>
            <input type="text" name="format" value={image.format} onChange={(e) => handleImageChange(index, e)} required />
          </label>
          <br/>
          <button type="button" onClick={() => handleRemoveImage(index)}>Remove Image</button>
          <br/>
          <button type="button" onClick={handleAddPrice}>Add Image</button>
         
        </div>
      ))}
    </>
  );
};

export default ImageFields;
