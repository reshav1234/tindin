import {useState} from 'react'
import axios from 'axios'


const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async() => {
        try{
            const response = await axios.post('http://localhost:8000/auth/register', {
                username, password
            })
            console.log("Registered", response.data)
        }catch(err) {
            console.error("Error registering")
        }
    }

    const handleLogin = async() => {
        try{
            const response = await axios.post('http://localhost:8000/auth/login', 
            {
                username, 
                password
            })
            console.log("Login successful", response.data)
        }catch(err) {
            console.error("Error login", err)
        }
    }

  return (
    <>
        <div className = "input">
            <input value = {username} onChange = {(e)=>setUsername(e.target.value)} />
            <input value = {password} onChange = {(e)=>setPassword(e.target.value)} />
        </div>
        <button onClick = {handleRegister}>Register</button>
        <button onClick = {handleLogin}>Login</button>
    </>
  )
}

export default Register