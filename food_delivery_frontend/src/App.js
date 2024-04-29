import './App.css';
import Home from './Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import VegMenu from './VegMenu';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from './Images/logo.png'
import About from './About';
import Registration from './Registration';
import Login from './Login';
import NonVegMenu from './NonVegMenu';
import Confirmedorder from './Confirmedorder';
import { Container, Row, Col } from 'react-grid-system';
import Cart from './Cart';
import { useEffect, useState } from 'react'; // Update import
import axios from 'axios';

function App() {

  return (
    <div className="App" style={{ fontFamily: "sans-serif" }}>
      <div className='container-fluid' style={{ backgroundColor: "lightsalmon", paddingTop: "2px", paddingBottom: "2px" }}>
        <div>
          <Row style={{ alignItems: "center" }}>
            <Col sm={3} >
              <img src={logo} alt="logo" style={{ width: "70px", height: "90%" }} />
            </Col>

            <Col sm={3} style={{ marginTop: "10px" }}>
              <a href="/" style={{ color: "green" }}><b>Home</b></a>
            </Col>

            <Col sm={3} style={{ marginTop: "10px" }}>
              <a href="/about" style={{ color: "green" }}><b>About Us</b></a>
            </Col>

            <Col sm={3} style={{ marginTop: "10px" }}>
              <a href="/nonvegmenu" style={{ color: "green" }}><b>Menu</b></a>
            </Col>

            {/* <Col sm={3.5} style={{ marginTop: "10px" }}> */}
              {/* <Dropdown>
                <Dropdown.Toggle variant="success">
                  Account
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='/registration'>Registration</Dropdown.Item>
                    <Dropdown.Item href='/login'>Login</Dropdown.Item>
  
                </Dropdown.Menu>
              </Dropdown> */}
            {/* </Col> */}
          </Row>
        </div>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nonvegmenu" element={<NonVegMenu />} />
        <Route path="/confirmedorder" element={<Confirmedorder />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <div style={{ backgroundColor: "lightsalmon", padding: "2px" }}>
        <h4>Thank you</h4>
        <p>For being on our website. Your presence is much appreciated.</p>
      </div>
    </div>
  );
}

export default App;
