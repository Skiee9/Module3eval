import {createContext, useState} from 'react'



export const AuthProvider =createContext();
export const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [token, setToken]= useState(null)

const login= async(user, password)=>{
try{
const response = await axios.post('https://maple-flying-lavender.glitch.me/login')
setUser= (response.data.user);
 setToken = (response.data.token);
 return true;

}catch(err){
console.log("failed to load")
}
}





  return (
    <AuthContext value={{user, token,login}}>
        {children}
    </AuthContext>
  )
}


