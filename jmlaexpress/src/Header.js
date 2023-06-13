import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="header-container container-fluid">
<Navbar bg="light" expand="lg" className="header">
        <div className="header-buttons">
          <Link to="/login">
            <Button variant="secondary" className="header-button2">
              تسجيل الدخول
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" className="header-button">
              إنشاء حساب
            </Button>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              الصفحة الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/feature">
              المميزات
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
