import React, { useState } from 'react';

const Product = () => {
  const [products] = useState([]);

  if (products.length === 0) {
    return <h2>Sie haben noch kein Produkt erstellt</h2>;
  }

  return (
    <div>
      {products.map((product) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
};

export default Product;
