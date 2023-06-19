import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Banner.css';
import bannerImage from './banner.png';

const Banner = () => {
  return (
    <div>
      <div className="banner-container" />
      <div className="banner-wrapper">
        <Row>
          <Col md={6} className="text-center">
            <div className="banner-left">
              <img src={bannerImage} alt="Banner" className="banner-image" />
            </div>
          </Col>
          <Col md={6} className="text-md-right text-center">
            <div className="banner-right">
              <div>
                <h1 className="banner-title">
                  الرابح من المنتوج و الخاسر من المنتوج
                </h1>
              </div>
              <p className="banner-paragraph">
                حان وقت التغيير!! اكتشف أول منصة إلكترونية في المغرب 100% مجانية تجمع بين رواد التجارة الإلكترونية وتجار الجملة
              </p>
              <div className="banner-cta">
                <button className="cta-button">إبدأ الآن</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="after-banner-text">
      <h1 className="sectio">لماذا اختيارنا؟</h1>

      </div>
    </div>
  );
};

export default Banner;
