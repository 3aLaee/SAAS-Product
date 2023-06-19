import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FcPortraitMode, FcShop, FcInTransit, FcPaid } from "react-icons/fc";
import './Steps.css';

const Steps = () => {
  return (
    <div className="steps-section">
      <Container>
        <h1 className="title">كيفية الاستخدام</h1>
        <Row>
          <Col xs={12} sm={6} md={3} className="text-right" style={{ order: 1 }}>
            <div className="step-card">
              <div className="step-icon">
                <FcInTransit className="step-icon-svg" />
              </div>
              <div className="step-number"> 4</div>
              <div className="step-text">تتبع شحنتك</div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-right" style={{ order: 2 }}>
            <div className="step-card">
              <div className="step-icon">
                <FcPaid className="step-icon-svg" />
              </div>
              <div className="step-number">3</div>
              <div className="step-text">أكد طلبك</div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-right" style={{ order: 3 }}>
            <div className="step-card">
              <div className="step-icon">
                <FcShop className="step-icon-svg" />
              </div>
              <div className="step-number">2</div>
              <div className="step-text">إختر منتجاتك</div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-right" style={{ order: 4 }}>
            <div className="step-card">
              <div className="step-icon">
                <FcPortraitMode className="step-icon-svg" />
              </div>
              <div className="step-number">1</div>
              <div className="step-text">أنشئ حسابك</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Steps;
