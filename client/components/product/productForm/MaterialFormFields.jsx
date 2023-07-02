import React from 'react';

const MaterialFields = ({ materials, handleAddMaterial, handleMaterialChange, handleRemoveMaterial }) => {
    return (
        <>
            {materials.map((material, index) => (
                <div key={index}>
                    <br/>
                    <h4>Material #{index + 1}</h4>
                    <label>
                        Name:
                        <br/>
                        <input type="text" name="name" value={material.name} onChange={(e) => handleMaterialChange(index, e)} required />
                    </label>
                    <label>
                        Percentage:
                        <br/>
                        <input type="text" name="percentage" value={material.percentage} onChange={(e) => handleMaterialChange(index, e)} required />
                    </label>
                    <br/>
                    <button type="button" onClick={() => handleRemoveMaterial(index)}>Remove Material</button>
                    <br/>
                    <button type="button" onClick={() => handleAddMaterial(index)}>Add Material</button>
                </div>
            ))}
        </>
    );
}

export default MaterialFields;