import React from 'react'
import './App.css'
import logo from './Images/logo.png'
import { Container, Row, Col } from 'react-grid-system';


function Confirmedorder() {
  return (
    <div style={{backgroundColor:"lightcyan"}}>
      <Container>
        <Row>
          <Col sm={2} lg={4}></Col>
          <Col sm={8} lg={4} style={{marginTop:"131px"}}>
            <img src={logo} alt="logo"/>
            <h4><u>Tasty Window</u></h4>
          </Col>
          <Col sm={2} lg={4}></Col>
        </Row>
        <Row>
          <Col sm={2} lg={4}></Col>
          <Col sm={8} lg={4} style={{marginBottom:"132px"}}>
            <h5 style={{color:"green"}}>
              Confirmed your order.
            </h5>
            <p>
              Click <a href="/nonvegmenu" style={{textDecoration:"none"}}>here</a> to shop more.
            </p>
          </Col>
          <Col sm={2} lg={4}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Confirmedorder
