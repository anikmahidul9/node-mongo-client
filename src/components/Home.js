import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Home() {
  const users = useLoaderData();
  const handleDelete = (user) => {
    const agree = window.confirm(`Are you sure you want to delete ${user.name}`);
    if(agree){
      console.log(user._id);
      fetch(`http://localhost:5000/users/${user._id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data=> console.log(data))
    }
  }
  return (
    <div>
        <h1>Hello world {users.length}</h1>
        {
          users.map(user => <p key={user._id}>{user.name}  {user.email}
          <Link to={'/users/'+user._id}><button>Update</button></Link> 
           <button onClick={()=>handleDelete(user)}>x</button></p>)
        }
    </div>
  )
}
