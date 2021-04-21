
import {useState,useEffect} from 'react';
import axios from 'axios';

const Login = () => {
    const [username,setUserName] = useState('');
    const [password,setUserPassword] = useState('');
    const [token,setToken] = useState('');
    const [message,setMessage] = useState('');



    const handleChangeUser = (e) =>
    {
        setUserName(e.target.value);
        console.log(username);
    }
    const handleChangePassword = (e) =>
    {
        setUserPassword(e.target.value);
        console.log(password);

    }
    const handleSubmit = async (e) =>
    {
          e.preventDefault();
          const URL = "http://localhost:3012/login";
          const VR_URL = "http://localhost:3012/protected";
          const body = {
            email:username,
            password:password
          }
          await axios.post(URL,body).then(
            res=>{
            setToken(res.data.token);
            }
          )
          console.log('token is',token)
          await axios.get(VR_URL,{
              headers:{
                token: token
            }
          }).then((res)=>{
              setMessage(res.data.message); 
          })
          console.log(message);
          setUserName('');
          setUserPassword('');
          localStorage.setItem('token',token);
          if(token!=='')
          {
          window.location.assign('/home');
          }
          else
          {
              setMessage('Not Authorised User')
          }
    }
  return (
    <>
    <div className="main">
      <div className="row justify-content-around p-1">
        <label className="p-1">Username</label>
        <input type="text" value={username} placeholder="Enter Username" onChange={(e)=>handleChangeUser(e)}/>
      </div>
      <div className="row justify-content-center p-1">
      <label className="p-1">Password</label>
        <input type="text" value={password} placeholder="Enter Password" onChange={(e)=>handleChangePassword(e)}/>
      </div>
      <div className="row justify-content-center p-1">
        <button className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Login</button>
      </div>
      <div className="row">{message}</div>
    </div>
    </>
  );
}

export default Login;
