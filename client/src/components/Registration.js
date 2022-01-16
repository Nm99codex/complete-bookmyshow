import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from "axios";
import {useState, useEffect} from "react";
import Swal from 'sweetalert2';

function Registration() {
    const [username, setUsername] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    function clearInput()
    {
        setUsername("");
        setEmailAddress("");
        setPassword("");
    }

    async function UserPost()
    {
        console.log(username,emailAddress,password)
        const userDetails = {
            "username" : username,
            "email" : emailAddress,
            "password" : password
        }
       // userDetails.username = 'nik';
    // console.log(userDetails);
    await axios.post("http://localhost:5001/user-register", userDetails)
    .then((data) => {
      Swal.fire({
        title: `<strong>${data.data.message}</strong>`,
        icon: "success",
        showCloseButton: true,
      });
      clearInput();
    })
    .catch((err) =>
      Swal.fire({
        title: `<strong>${err.message}</strong>`,
        icon: "error",
        showCloseButton: true,
      })
    );

    }

    return (
        <div>
            <Container style = {{padding:"8%"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control value = {username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value = {emailAddress} onChange={(e)=>setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />   
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value = {password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick = {UserPost}> 
                    Submit
                </Button>
            </Form> 
            </Container>
        </div>
    )
}

export default Registration
