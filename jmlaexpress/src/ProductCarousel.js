import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cosmeticImage from './cosmetic.jpg';
import cheveuxImage from './cheveux.jpg';
import './ProductCarousel.css';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      title: 'مستحضر تجميل',
      price: '10 دولار',
      store: 'متجر أ',
      views: 100,
      imageUrl: cosmeticImage,
    },
    {
      id: 2,
      title: 'منتجات الشعر',
      price: '20 دولار',
      store: 'متجر ب',
      views: 200,
      imageUrl: cheveuxImage,
    },
    // Add more products as needed
  ];

  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <div className="product-details-container">
            <div className="product-image">
              <img src={product.imageUrl} alt={product.title} />
            </div>

            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="store">{product.store}</p>
            </div>

            <div className="product-footer">
              <div className="views">
                <i className="fa fa-eye" aria-hidden="true"></i>
                <span>{product.views}</span>
              </div>
              <button className="buy-button">شراء</button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
