import React, { createContext, useState } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const Usercontext= createContext();

function Login() {

    const[input,setInput]= useState({
        username:"",
        password:""
    });

    const[isLoggedIn, setIsLoggedIn]= useState(false);

    const navigate= useNavigate()

    const submitHandler=()=>{
        axios.post("http://localhost:5000/login",{
            username:input.username,
            password:input.password
        }).then((response)=>{
            alert("Login successful")
            navigate("/nonvegmenu")
            console.log(response.data)
            setIsLoggedIn(true)
        }).catch((err)=>{
            alert("Invalid username or password");
            console.log(err)
            setIsLoggedIn(false);
        })
        console.log("http://localhost:5000/login");
    }

    const changeHandler=(e)=>{
        const {name,value}=e.target;
        setInput((prev)=>({
            ...prev,
            [name]:value
        }))
    }

  return (
    <div style={{backgroundColor:"lightsteelblue", padding:"64px"}}>
        <h4 className='mb-4'><u>Login here</u></h4>
        <Form style={{paddingTop:"55px", paddingBottom:"96px"}} className='container'>
            <Form.Group className='mb-5 shadow-sm' style={{maxWidth:"500px", margin:"0 auto"}}>
                <Form.Control type="text" placeholder='Username' name="username" className='input' style={{padding:"10px"}} onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className='mb-5 shadow-sm' style={{maxWidth:"500px", margin:"0 auto"}}>
                <Form.Control type="password" placeholder='Password' name="password" className='input' style={{padding:"10px"}} onChange={changeHandler}/>
            </Form.Group>

            <Button className='mt-2 shadow-md' type="button" onClick={submitHandler} variant="info" style={{padding:"10px"}}>Submit</Button>
        </Form>

        <Usercontext.Provider>
            {isLoggedIn}
        </Usercontext.Provider>
    </div>
  )
}

export default Login
