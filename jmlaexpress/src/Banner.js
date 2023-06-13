import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Banner.css';
import bannerImage from './banner.png';

const Banner = () => {
  return (
    <div className="banner-container">
      <Row>
        <Col md={6} className="text-center">
          <div className="banner-left">
            <img src={bannerImage} alt="Banner" className="banner-image" />
          </div>
        </Col>
        <Col md={6} className="text-right">
          <div className="banner-right">
            <div>
              <h1 className="banner-title">
                الرابح من المنتوج و الخاسر من المنتوج
              </h1>
            </div>
            <p className="banner-paragraph">
              حان وقت التغيير!! لأول مرة في المغرب اكتشف منتجات متنوعة ومتاحة من تجار الجملة المختلفين في مكان واحد
            </p>

            <div className="banner-mark-container">
              <div className="banner-mark">
                <span className="banner-mark-text"> قارن أسعار المنتوجات بين تجار الجملة الموثوق بهم </span>
                <div className="green-mark"></div>
              </div>
              <div className="banner-mark">
                <span className="banner-mark-text"> ضاعف حضوضك من إيجاد المنجات الرابحة بأقل مجهود </span>
                <div className="green-mark"></div>
              </div>
              <div className="banner-mark">
                <span className="banner-mark-text"> انضم إلينا واستفد من الإمكانيات الهائلة لمضاعفة أرقامك في التجارة الإلكترونية </span>
                <div className="green-mark"></div>
              </div>
              <div className="banner-cta">
                <button className="cta-button">ابدأ الآن</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
