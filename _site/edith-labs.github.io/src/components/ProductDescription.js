import React from 'react';

function ProductDescription({ title, description }) {
  return (
    <div class='column'>
      <h3 class='title is-size-4'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProductDescription;