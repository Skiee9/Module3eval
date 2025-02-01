import {useState,useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import "../styles/Home.css"

const Home = () => {
    const[user, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const [login] = useContext(AuthContext)
    const navigate = useNavigate()

const handleSubmit= async(e)=>{
    e.preventDefault()
   const success= await login(user, password);
   if(success){
    navigate('/quiz')
   }
   else{
    alert("Invalid username or password")
   }
}

  return (
    <>
    <div className='home'>
      <h1>Welcome to the Quiz App!</h1>
      <h3>
      test your knowledge and challenge yourself with quiz page. Please </h3>
      {/* <Login/> */}
    </div>
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" value={user} onChange={(e)=>setUsername (e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    </div>
     
    </>
   
  )
}

export default Home;
