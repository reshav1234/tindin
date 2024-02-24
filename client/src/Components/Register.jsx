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
        <div className = "divide-y divide-gray-200">
            <div className = "py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className = 'relative'>
                    <input value = {username} name = "username" onChange = {(e)=>setUsername(e.target.value)}  className = "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username"/>
                    <label htmlFor="username" className = "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                </div>
                <div className = 'relative'>
                    <input value = {password} name = "password" onChange = {(e)=>setPassword(e.target.value)} className = "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder='Password'/>
                    <label htmlFor = "password" className = "absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className = "relative">
                    <button className = "bg-blue-500 text-white rounded-md px-2 py-1" onClick = {handleRegister}>Register</button>
                    <button  onClick = {handleLogin}>Login</button>
                </div>
            </div>  
        </div>
    </>
  )
}

export default Register