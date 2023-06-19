import React from 'react';
import './ChooseUs.css';

import { ReactComponent as CustomerIcon } from './customer.svg';
import { ReactComponent as PriceIcon } from './price.svg';
import { ReactComponent as FocusIcon } from './focus.svg';

const ChooseUs = () => {
  return (
   
    <div className="choose-us-container">
      <div className="choose-us-item">
        <div className="choose-us-icon">
          <CustomerIcon />
          </div>
        <h3 className="choose-us-title">تتبع شحنتك </h3>
        <p className="choose-us-description"> نحن نوفر لك المعلومات اللازمة عن الشحن لضمان توصلك بالشحنة في الوقت المناسب </p>
      </div>
        

      <div className="choose-us-item">
        <div className="choose-us-icon">
          <FocusIcon />
        </div>
        <h3 className="choose-us-title">منتجات متنوعة</h3>
        <p className="choose-us-description">إكتشف مئات المنتوجات من جميع الأصناف في منصة واحدة مجانية و سهلة الإستعمال</p>
      </div>

      <div className="choose-us-item">
        <div className="choose-us-icon">
          <PriceIcon />
          </div>
        <h3 className="choose-us-title">قارن أسعار</h3>
        <p className="choose-us-description">يمكنك مقارنة أسعار المنتوجات بين عشرات تجار الجملة الموثوق بهم لضمان أكبر نسبة ربح ممكنة</p>
      </div>
    </div>
    
  );
};

export default ChooseUs;
