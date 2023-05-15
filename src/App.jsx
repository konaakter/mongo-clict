import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  

  const hanlesubmit =(event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const users = {email, password}
    console.log(users);
    fetch('http://localhost:5000/users',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(users),
    })
    .then (res => res.json())
    .then(data =>{
      console.log(data)
      if (data.insertedId) {
        alert("user is succesfully added")
        event.target.reset()
        
      }
    })

  }

  return (
    <div>
        
    <form onSubmit={hanlesubmit} >
      <input type="email" name="email" id="" /> <br />
      <input type="password" name="password" id="" /> <br />
      <button>submit</button>
    </form>

    </div>
  )
}

export default App
