// import React, { useState } from 'react'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/esm/Button';
// import { Container, Row, Col } from 'react-grid-system';
// import './App.css'
// import { AllObjects } from './AllObjects';
// import App from './App';
// import Cartfunction from './Cartfunction';

// function VegMenu(props) {
// //  const map=()=>{
// //    const filter=  AllObjects.filter((item)=>item.category==="Pure Veg")
// //    filter.map((item)=>{
// //     console.log(item);
// //    })
// //  }
   
//     return (
//         <div>
//         <Container>
//                 <Row  style={{marginBottom:"13px",marginTop:"13px"}}>

//                     <Col sm={4}></Col>
//                     <Col sm={4}>
//                         <h4>
//                             <u>
//                                 Your Veg Meals
//                             </u>
//                         </h4>
//                     </Col>
//                     <Col sm={4}></Col>
//                 </Row>
//                 <Row className='cardRow' style={{marginBottom:"13px",marginTop:"10px"}}>
//                     {AllObjects.filter((item)=>item.category==="Pure Veg").map((item)=>(
//                         <>
                        
//                             {/* <Col lg={0.5} sm={1}></Col> */}
//                             <Col lg={4} sm={10 } className='mb-3'>
//                                 <Card className="shadow p-3 bg-white rounded card">
                                
//                                     <Card.Img src={item.image} alt="Veg Thali" className='cardimg'/>
//                                     <Card.Body>
//                                         <Card.Title>{item.recipe}</Card.Title>
//                                         <p><b>{item.rs}</b></p>
//                                         <hr></hr>
//                                         <Card.Text className='cardtext'>
//                                             <p> {item.description}</p>
//                                             <Button type="button" className='shadow-sm' id={item.id} onClick={(e)=>console.log(e.target.id)}>Add to Cart</Button>
//                                         </Card.Text>
//                                     </Card.Body>
//                                 </Card>
                                
//                             </Col>
                             
//                         </>
//                         ))}
//                 </Row> 
                    
                     
     
//                      {/* <Col lg={1}></Col>
//                      <Col lg={3} sm={10}>
//                          <Card className="shadow p-3 bg-white rounded card">
//                              <Card.Img src={spclvegthali} alt="Special Veg-Thali"  className='cardimg'/>
//                              <Card.Body>
//                                  <Card.Title>Special Veg Thali</Card.Title>
//                                  <p><b>INR: 150Rs</b></p>
//                                  <hr></hr>
//                                  <Card.Text className='cardtext'>
//                                      <p>Chapati:4pcs, Jeera Rice, Mix-Veg, Kadhai Paneer, Dal Tadka, Gulab Jamun- 2pcs.</p>
//                                      <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                  </Card.Text>
//                              </Card.Body>
//                          </Card>
//                      </Col>
     
//                      <Col lg={1}></Col>
     
//                      <Col lg={3} sm={10}>
//                          <Card className="shadow p-3 bg-white rounded card">
//                              <Card.Img src={kadhaipaneer} alt="Kadhai Paneer" className='cardimg'/>
//                              <Card.Body>
//                                  <Card.Title>Kadhai Paneer</Card.Title>
//                                  <p><b>INR: 150Rs</b></p>
//                                  <hr></hr>
//                                  <Card.Text className='cardtext'>
//                                      <p>Have a taste of our delicious Kadhai Paneer.</p>
//                                      <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                  </Card.Text>
//                              </Card.Body>
//                          </Card>
//                      </Col>
//                      <Col lg={0.5} sm={1}></Col>
//                 </Row>

//                 {/* Second Row */}
//                 {/* <Row className='cardRow' style={{marginBottom:"13px"}}>
//                     <Col lg={0.5} sm={1}></Col>
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={misalpav} alt="Misal Pav" className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Misal Pav</Card.Title>
//                                 <p><b>INR: 200Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>Get ready to experience a burst of flavors with misal pav!.</p>
//                                     <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
    
//                     <Col lg={1}></Col>
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={pavbhaji} alt="Pav Bhaji"  className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Pav Bhaji</Card.Title>
//                                 <p><b>INR: 110Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>The magic of Pav Bhaji lies in its perfectly spiced mashed vegetables, served with buttery pav.</p>
//                                     <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
    
//                     <Col lg={1}></Col>
    
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={chanamasala} alt="Chana Masala" className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Chana Masala</Card.Title>
//                                 <p><b>INR: 100Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>Chana Masala is a perfect example of health with taste.</p>
//                                     <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col lg={0.5} sm={1}></Col>
                    
//                 </Row>
                
//                 {/* Third Row */}
//                 {/* <Row className='cardRow' style={{marginBottom:"13px"}}>
//                     <Col lg={0.5} sm={1}></Col>
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={aloogobhi} alt="Aloo Gobhi" className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Aloo Gobhi</Card.Title>
//                                 <p><b>INR: 80Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>Get your tasty Aloo Gobhi In your bowl with.</p>
//                                     <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
    
//                     <Col lg={1}></Col>
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={dal} alt="Dal"  className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Dal Fry</Card.Title>
//                                 <p><b>INR: 80Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>A Healthy Taste just a click away.</p>
//                                     <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
    
//                     <Col lg={1}></Col>
    
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={dalmakhni} alt="Dal Makhni" className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Dal Makhni</Card.Title>
//                                 <p><b>INR: 110Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>The smoky and buttery flavors of dal makhani will leave you craving for more.</p>
//                                     <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col lg={0.5} sm={1}></Col>
//                 </Row> */}

//                 {/* Fourth Row */}
//                 {/* <Row className='cardRow' style={{marginBottom:"13px"}}>
//                     <Col lg={0.5} sm={1}></Col>
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={shahipaneer} alt="Shahi Paneer" className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Shahi Paneer</Card.Title>
//                                 <p><b>INR: 140Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>Shahi Paneer is an Indian dish that will melt your heart for.</p>
//                                     <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
    
//                     <Col lg={1}></Col>
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={paneertikka} alt="Paneer Tikka"  className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Paneer Tikka</Card.Title>
//                                 <p><b>INR: 160Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>Spice up your life with Paneer Tikka.</p>
//                                     <Button type="button" className='shadow-sm'>Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
    
//                     <Col lg={1}></Col>
    
//                     <Col lg={3} sm={10}>
//                         <Card className="shadow p-3 bg-white rounded card">
//                             <Card.Img src={rajmachawal} alt="Rajma Chawal" className='cardimg'/>
//                             <Card.Body>
//                                 <Card.Title>Rajma Chawal</Card.Title>
//                                 <p><b>INR: 160Rs</b></p>
//                                 <hr></hr>
//                                 <Card.Text className='cardtext'>
//                                     <p>Rajma Chawal is a North Indian curried dish made with kidney beans, onions, tomatoes.</p>
//                                     <Button type="button" className='shadow-sm' >Add to Cart</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
                        
//                     </Col>
//                     <Col lg={0.5} sm={1}></Col> */}
               
                
//         </Container>
//         </div>
//       )
// }

// export default VegMenu
