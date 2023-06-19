import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';
import cheveuxImage from './cheveux.jpg';
import cosmeticImage from './cosmetic.jpg';

const Slider = () => {
  
  const slides = [
    {
      id: 1,
      imageUrl: cheveuxImage,
      title: 'عنوان المنتج الأول',
      store: 'اسم المتجر الأول',
      price: '100 ريال',
      rating: 4.5,
      views: 128,
    },
    {
      id: 2,
      imageUrl: cosmeticImage,
      title: 'عنوان المنتج الثاني',
      store: 'اسم المتجر الثاني',
      price: '200 ريال',
      rating: 3.8,
      views: 98,
    },
    {
      id: 2,
      imageUrl: cosmeticImage,
      title: 'عنوان المنتج الثاني',
      store: 'اسم المتجر الثاني',
      price: '200 ريال',
      rating: 3.8,
      views: 98,
    },
    {
      id: 2,
      imageUrl: cosmeticImage,
      title: 'عنوان المنتج الثاني',
      store: 'اسم المتجر الثاني',
      price: '200 ريال',
      rating: 3.8,
      views: 98,
    },
    // Add more slides here
  ];

  return (

    <div className="section-container">
      <h1 className="title">منتجات رائجة </h1>
     
      <div className="slider-container">
        <Carousel
          showThumbs={false}
          autoPlay
          interval={2000}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button className="carousel-button prev" onClick={onClickHandler}>
                
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button className="carousel-button next" onClick={onClickHandler}>
                
              </button>
            )
          }
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <div className="product-image">
                <img src={slide.imageUrl} alt={slide.imageUrl} />
              </div>
              <div className="content">
                <h2 className="title">{slide.title}</h2>
                <p>{slide.store}</p>
                <p>{slide.price}</p>
                <button className="buy-button">Buy</button>
                <div className="bottom-section">
                  <div className="rating">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`star ${slide.rating >= index + 0.5 ? 'filled' : ''}`}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <div className="views">
                    <span className="eye">&#128065;</span>
                    <span>{slide.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
