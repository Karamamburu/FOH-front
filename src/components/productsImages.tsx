import React from 'react';

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  return (
    <div className='product-tray'>
      {images.map((imageName, index) => (
        <img className='product'
          key={index}
          src={`../src/assets/products/${imageName}`}
          alt={imageName}
          style={{ maxWidth: '110%' }}
        />
      ))}
    </div>
  );
};

export default ProductImages;
