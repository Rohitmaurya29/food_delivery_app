import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import logo from './Images/logo.png'
import misalpav from './Images/misalPav.jpg'
import paneertikka from './Images/paneerTikka.jpg'
import fishfingers from './Images/fishfingers.jpg'
import burger from './Images/burger.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css'

function Home() {
    const navigate= useNavigate()
    const navigateMenu=()=>{
        navigate('/registration')
    }

  return (
    <div style={{backgroundColor:"lightcyan", fontFamily:"sans-serif"}}>
      <div>
        <Carousel className='container carousel' >
          <Carousel.Item className='item'>
            <img 
            className='d-block w-100 h-100 itemimg'
            src={misalpav}
            alt="Misal Pav"
            />
            <Carousel.Caption>
              <Button type="button" onClick={navigateMenu}>Explore our Goodness</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className='item'>
            <img 
            className='d-block w-100 h-100 itemimg'
            src={paneertikka}
            alt="Paneer Tikka"
            />
            <Carousel.Caption>
              <Button type="button" onClick={navigateMenu}>Explore our Goodness</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className='item'>
            <img 
            className='d-block w-100 h-100 itemimg'
            src={fishfingers}
            alt="Fish Finger"
            />
            <Carousel.Caption>
              <Button type="button" onClick={navigateMenu}>Explore our Goodness</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className='item'>
            <img 
            className='d-block w-100 h-100 itemimg'
            src={burger}
            alt="Burger"
            />
            <Carousel.Caption>
              <Button type="button" onClick={navigateMenu}>Explore our Goodness</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
