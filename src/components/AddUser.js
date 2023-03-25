import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function AddUser() {
  const [user, setUser] = useState({});
  console.log(user);
  const handleToClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.acknowledged){
          alert('User successfully added')
          e.target.reset();
        }
      });
    
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
          type="text"
          placeholder="User Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onBlur={handleInputBlur}
          name="email"
          type="email"
          placeholder="Email"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
