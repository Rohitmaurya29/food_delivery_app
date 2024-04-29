import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';
import { AllObjects } from './AllObjects';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

function NonVegMenu() {
    const [productList, setProductList]= useState(AllObjects);
    const [cartItems, setCartItems]= useState([]);
    const navigate= useNavigate();

    const addToCart=(product) => {
        setCartItems([...cartItems, product])
    }
    return (
        <>
        <Cart cart={cartItems}/>
            <Container>
                <Row style={{ marginBottom: "13px", marginTop: "13px" }}>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <h4>
                            <u>
                                Your Non-Veg Meals
                            </u>
                        </h4>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
                <Row className='cardRow' style={{ marginBottom: "13px" }}>
                    {AllObjects.filter((item) => item.category === "Non Veg").map((data) => (
                        <Col lg={4} sm={10} className='mb-3' key={data.id}>
                            <Card className="shadow p-3 bg-white rounded card">
                                <Card.Img src={data.image} alt="Image" className='cardimg' />
                                <Card.Body>
                                    <Card.Title>{data.recipe}</Card.Title>
                                    <p><b>{data.rs}</b></p>
                                    <hr></hr>
                                    <Card.Text className='cardtext'>
                                        <p>{data.description}</p>
                                        <Button type="button" className='shadow-sm' id={data.id} onClick={() => addToCart(data)}>Add to Cart</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            
                <Row style={{ marginBottom: "13px", marginTop: "13px" }}>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <h4>
                            <u>
                                Your Fast Food Meals
                            </u>
                        </h4>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
                <Row className='cardRow' style={{ marginBottom: "13px" }}>
                    {AllObjects.filter((item) => item.category === "Fast Food").map((data) => (
                        <Col lg={4} sm={10} className='mb-3' key={data.id}>
                            <Card className="shadow p-3 bg-white rounded card">
                                <Card.Img src={data.image} alt="Image" className='cardimg' />
                                <Card.Body>
                                    <Card.Title>{data.recipe}</Card.Title>
                                    <p><b>{data.rs}</b></p>
                                    <hr></hr>
                                    <Card.Text className='cardtext'>
                                        <p>{data.description}</p>
                                        <Button type="button" className='shadow-sm' id={data.id} onClick={() => addToCart(data)}>Add to Cart</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row style={{ marginBottom: "13px", marginTop: "13px" }}>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <h4>
                            <u>
                                Your Pure Veg Meals
                            </u>
                        </h4>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
                <Row className='cardRow' style={{ marginBottom: "13px" }}>
                    {AllObjects.filter((item) => item.category === "Pure Veg").map((data) => (
                        <Col lg={4} sm={10} className='mb-3' key={data.id}>
                            <Card className="shadow p-3 bg-white rounded card">
                                <Card.Img src={data.image} alt="Image" className='cardimg' />
                                <Card.Body>
                                    <Card.Title>{data.recipe}</Card.Title>
                                    <p><b>{data.rs}</b></p>
                                    <hr></hr>
                                    <Card.Text className='cardtext'>
                                        <p>{data.description}</p>
                                        <Button type="button" className='shadow-sm' id={data.id} onClick={() => addToCart(data)}>Add to Cart</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            </>
    );
}

export default NonVegMenu;
