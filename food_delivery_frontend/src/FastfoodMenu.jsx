// import React from 'react'
// import CardBody from 'react-bootstrap/esm/CardBody'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/esm/Button';
// import { Container, Row, Col } from 'react-grid-system';
// import { AllObjects } from './AllObjects';


// function FastfoodMenu() {
//     return (
//         <Container>
//                 <Row  style={{marginBottom:"13px",marginTop:"13px"}}>
//                     <Col sm={4}></Col>
//                     <Col sm={4}>
//                         <h4>
//                             <u>
//                                 Your Fast Food Meals
//                             </u>
//                         </h4>
//                     </Col>
//                     <Col sm={4}></Col>
//                 </Row>
//                 <Row className='cardRow' style={{marginBottom:"13px"}}>
//                     {AllObjects.filter((item)=>item.category==="Fast Food").map((data)=>(
//                     <Col lg={4} sm={10}  className='mb-3'>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={data.image} alt="Burger" className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>{data.recipe}</Card.Title>
//                                 <p><b>{data.rs}</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>{data.description}</p>
//                                     <Button type="button" className='shadow-sm' id={data.id} onClick={(e)=>console.log(e.target.id)}>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     ))}
//                 </Row>
//         </Container>
//       )
// }

// export default FastfoodMenu
