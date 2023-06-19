import React from 'react';
import './Stats.css';
import { ReactComponent as FocusSvg } from './ful.svg';
import { ReactComponent as ChatSvg } from './chat.svg';
import { ReactComponent as FullSvg } from './full.svg';

const Blocks = () => {
  return (
    <div className="blocks-container">
      <div className="block">
        <FocusSvg className="block-svg" />
        <h3 className="block-title">مجانية دائمة</h3>
        <p className="block-paragraph">
          هدفنا تطوير التجارة الإلكترونية بالمغرب و توفير أحسن الظروف لها
        </p>
      </div>
      <div className="block">
        <ChatSvg className="block-svg" />
        <h3 className="block-title">دعم 7/7</h3>
        <p className="block-paragraph">
        نوفر لكل مستعملي المنصة دعم فني متواصل لحل جميع المشاكل
        </p>
      </div>
      <div className="block">
        <FullSvg className="block-svg" />
        <h3 className="block-title">شحن بكل المغرب</h3>
        <p className="block-paragraph">
          تجار الجملة الموجودين في المنصة يوفرون شحن لكل المدن المغربية
        </p>
      </div>
    </div>
  );
};

export default Blocks;
