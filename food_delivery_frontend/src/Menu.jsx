import React from 'react'
import Card from 'react-bootstrap/Card';
import nonveg from './Images/nonvegFood.webp'
import VegFood from './Images/VegFood.jpg'
import Fastfood from './Images/Fas.jpg'
import Button from 'react-bootstrap/esm/Button';
import logo from './Images/logo.png'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import './App.css'

function Menu() {
    const navigate= useNavigate()
    const click=(e)=>{
        navigate("/"+[e.target.value])
    }
  return (
    <div style={{padding:"83px", backgroundColor:"lightcyan"}}>
        <div>
            <Row  style={{marginBottom:"13px"}}>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <h4>
                        <u>
                            Let your click decide your today's mood
                        </u>
                    </h4>
                </Col>
                <Col sm={4}></Col>
            </Row>
            <Row className='cardRow'>
                <Col lg={0.5} sm={1}></Col>
                <Col lg={3} sm={10}>
                    <Card className="shadow p-3 bg-white rounded card">
                        <Card.Img src={VegFood} variant='top' className='ctgryimg'/>
                        <Card.Body>
                            <Card.Title>Pure Veg</Card.Title>
                            <Button type="button" value="vegmenu" onClick={click} className='shadow-sm'>Explore</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={1}></Col>
                <Col lg={3} sm={10}>
                    <Card className="shadow p-3 bg-white rounded card">
                        <Card.Img src={Fastfood} alt="FastFood" className='ctgryimg'/>
                        <Card.Body>
                            <Card.Title>Fast Food</Card.Title>
                            <Button type="button" value="fastfoodmenu" onClick={click} className='shadow-sm'>Explore</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={1}></Col>

                <Col lg={3} sm={10}>
                    <Card className="shadow p-3 bg-white rounded card">
                        <Card.Img src={nonveg} alt="Non-Veg" className='ctgryimg'/>
                        <Card.Body>
                            <Card.Title>Non-Veg</Card.Title>
                            <Button type="button" value="nonvegmenu" onClick={click} className='shadow-sm'>Explore</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={0.5} sm={1}></Col>
            </Row>

            
        </div>
    </div>
  )
}

export default Menu
