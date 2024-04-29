import React from 'react'
import logo from './Images/logo.png'

function About() {
  return (
    <div style={{backgroundColor:"lightpink", paddingBottom:"118px"}}>
        
        <div>
            <u>
                <h2>
                    About Us
                </h2>
            </u>
        </div>

        <div style={{margin:"20px auto"}}>
            <img 
                display="d-block w-100"
                src={logo}
                alt="Logo"
            />
        </div>

        <div className='container abouttext'>
            <p>
                Welcome to the Tasty Window, it is an Indian online food ordering and delivery platform,founded in 2024 by Rohit Maurya. Tasty Window is a platform, where we're dedicated to serving up more than just meals - we're delivering experiences. Our user-friendly platform connects you with a curated selection of top-notch restaurants, ensuring every bite is a delight. Whether you're craving comfort classics, exotic delights, or healthy options, we've got you covered. Join the food revolution and let us redefine the way you dine, one delivery at a time.
            </p>
            <p>
                Empowering your cravings with convenience, our self food delivery app brings delicious flavors straight to your doorstep. From local favorites to global cuisines, indulge in a seamless culinary journey with just a few taps. Welcome to a world where satisfying your hunger is as easy as a click away.
            </p>
        </div>
    </div>
  )
}

export default About
