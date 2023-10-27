import React from 'react';

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  return (
    <div className='product-tray'>
      {images.map((imageName, index) => (
        <img
          key={index}
          src={`../src/assets/${imageName}`}
          alt={imageName}
          style={{ maxWidth: '100px' }}
        />
      ))}
    </div>
  );
};

export default ProductImages;
