import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'

export default function Update() {
  const storedUser = useLoaderData()
  const [user, setUser] = useState({});
  console.log(user);
  const handleToClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/${storedUser._id}`,{
        method:'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
    
  };

  const handleInputBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <Form onSubmit={handleToClick} className="w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          onBlur={handleInputBlur}
          name="name"
          defaultValue={storedUser.name}
          type="text"
          placeholder="User Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onBlur={handleInputBlur}
          name="email"
          defaultValue={storedUser.email}
          type="email"
          placeholder="Email"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  )
}
