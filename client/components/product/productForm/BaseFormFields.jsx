import React from 'react';

const BaseFormFields = ({ product, handleChange }) => {
    return (
        <>
        <label>
            Name:
            <br/>
            <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </label>
        <label>
            Description:
            <br/>
            <textarea name="description" value={product.description} onChange={handleChange} required />
        </label>
        </>
    );
}   

export default BaseFormFields;