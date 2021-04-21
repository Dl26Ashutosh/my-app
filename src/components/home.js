import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    const [token,setToken] = useState('');
    const [message,setMessage] = useState('');

    useEffect(async () => {
        const temp_token = localStorage.getItem('token')!==''?localStorage.getItem('token'):null;
        const VR_URL = "http://localhost:3012/protected";
        setToken(temp_token);
        await axios.get(VR_URL,{
            headers:{
              token: temp_token
          }
        }).then((res)=>{
            console.log('protected route',res);
            setMessage(res.data.message); 
        })
    }, []);

    const handleLogout = () =>
    {
            localStorage.removeItem('token');
            setMessage('');
    }
    return (
        <div>
            {message===''?<h4>Not Authorised User</h4>:(<div className="container justify-content-center">
                <div className="row text-center"><h4>{message}</h4></div>
                <div className="row text-center">Hey My Name is Ashutosh</div>
                <div className="row text-center">I am Mumbai based Developer</div>
                <div className="row text-center"><button className="btn btn-primary" onClick={()=>{handleLogout()}}>Logout</button></div>
                </div>)}
        </div>
    )
}

export default Home;
