import React from 'react';
import './Back.css';
import gifImage from './gig.gif';

const Back = () => {
  return (
    <div className="back-section">
      <div className="back-content">
        <div className="back-text">
          <h1 className="back-title">سهولة الاستخدام و مجانية تامة</h1>
          <div className="back-gif">
            <img src={gifImage} alt="GIF" />
          </div>
          <p className="back-paragraph">هدفنا تطوير التجارة الإلكترونية بالمغرب و توفير أحسن الظروف للشباب ممتهني هذا القطاع</p>
          <button className="back-button">إكتشف المنتوجات</button>
        </div>
      </div>
    </div>
  );
};

export default Back;
