import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Cart(props) { 
    const [newcart, setnewcart] = useState([]);
    useEffect(() => {
      const propsvalue = props.cart;
      setnewcart(propsvalue);
    }, [props.cart]);

    const navigate = useNavigate();

    const confirm = () => {
        navigate('/Confirmedorder');
    };

    return (
        
        <div style={{ backgroundColor: "lightcyan" }}>
            <Container>
                <Row>
                    <Col lg={4} sm={2}></Col>
                    {newcart.map((item,index) => (
                        <Col lg={4} sm={8} key={item.id}>
                            <Card className="shadow p-3 bg-white rounded card mt-2 mb-2">
                                <Card.Img src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.recipe}</Card.Title>
                                    <p><b>{item.rs}</b></p>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Row>
                                        <Col sm={4}></Col>
                                        <Col sm={4}>
                                            <Button type='button' onClick={confirm}>Confirm</Button>
                                        </Col>
                                        <Col sm={4}>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <Col lg={4} sm={2}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;
