

import {useState,useEffect} from 'react';
import axios from 'axios';

const Login = () => {
    const [name,setName] = useState('');
    const [email,setMail] = useState('');
    const [password,setPassword] = useState('');
    const [gender,setGender] = useState('male');



    const handleChangeName = (e) =>
    {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }
    
    const handleChangeEmail = (e) =>
    {
        e.preventDefault();
        setMail(e.target.value);
        console.log(email);
    }
    const handleChangePassword = (e) =>
    {
        e.preventDefault();
        setPassword(e.target.value);
        console.log(password);

    }
    const handleSelect = (e) =>
    {
        e.preventDefault();
        setGender(e.target.value);
        console.log(gender);

    }
    
    const handleSubmit = async (e) =>
    {
            e.preventDefault();
          const URL = "http://localhost:3012/register";
          const body = {
            name:name,
            email:email,
            password:password,
            gender:gender
          }
          await axios.post(URL,body).then(
            res=>{
            console.log(res);
            }
          ).then(
            alert('Registration Completed')
          )
        setName('');
        setMail('');
        setPassword('');
        setGender('');
          
    }
  return (
    <>
    <div className="main">
      <div className="row justify-content-around p-1">
        <label className="p-1">name</label>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>handleChangeName(e)}/>
      </div>
      <div className="row justify-content-center p-1">
      <label className="p-1">email
      </label>
        <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>handleChangeEmail(e)}/>
      </div>
      <div className="row justify-content-center p-1">
      <label className="p-1">Password
      </label>
        <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>handleChangePassword(e)}/>
      </div>
      <div className="row justify-content-center p-1">
      <label className="p-1">Gender
      </label>
      <select name="gender"className="" style={{width:"80px"}} id="cars" onChange={(e)=>handleSelect(e)}>
        <option value="male">male</option>
        <option value="female">female</option>
    </select>
      </div>
      <div className="row justify-content-center p-1">
        <button className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Register</button>
      </div>
    </div>
    </>
  );
}

export default Login;
