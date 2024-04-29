import React, { useState } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';


function Registration() {

  const navigate= useNavigate();


  const[input,setInput]=useState({
    fullname:"",
    username:"",
    email:"",
    password:""
})

const changeHandler=(e)=>{
    const {name,value}= e.target;
    setInput((prev)=>({
        ...prev,
        [name]:value
    }))
}

const submitHandler=()=>{
  if(!input.fullname || !input.username || !input.email || !input.password){
    alert("Please fill the fields");
    return;
  }
    axios.post("http://localhost:5000/registration",{
      fullname:input.fullname,
      username:input.username,
      email:input.email,
      password:input.password
    }).then((response)=>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err);
    })
    alert("Registration successful")
    console.log(input)
    navigate('/nonvegmenu')
}

    // const navigateLogin=()=>{
        
    // }

  return (
    <div style={{backgroundColor:"lightsteelblue", padding:"33px"}}>
        <h4 className='mb-5'><u>Register yourself here</u></h4>
      <Form className='container' style={{}}>
            <Form.Group className='mb-5 shadow-sm' style={{maxWidth:"500px", margin:"0 auto"}}>
                <Form.Control type="text" placeholder='Full Name' name="fullname" className='input' onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className='mb-5 shadow-sm' style={{maxWidth:"500px", margin:"0 auto"}}>
                <Form.Control type="text" placeholder='Username' name="username" className='input' onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className='mb-5 shadow-sm' style={{maxWidth:"500px", margin:"0 auto"}}>
                <Form.Control type="email" placeholder='E-mail (eg: 123@gmail.com)' name="email" className='input' onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className='mb-5 shadow-sm' style={{maxWidth:"500px", margin:"0 auto"}}>
                <Form.Control type="password" placeholder='Password' name="password" className='input' onChange={changeHandler}/>
            </Form.Group>

            <Button type="button" className='mb-4 shadow-lg' variant="info" onClick={submitHandler}>Submit</Button>
            <div>
            <a href='/login'>Already have an account</a>
            </div>
            
      </Form>
    </div>
  )
}

export default Registration
