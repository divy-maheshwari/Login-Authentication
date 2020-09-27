import React , { useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const history = useHistory();
  const [messages,setMessages] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/user/login',{
      email: form.email,
      password: form.password,
    })
    .then(data => { 
      
      if(!data.data){
        history.push('/dashboard');
    
      }
      else {
         setMessages(data.data);
         history.push('/user/login')
      }
    })
    .catch(error => {
      console.log(error);
    });
  };





    return (
        <div className="row mt-5">
  <div className="col-md-6 m-auto">
    <div className="card card-body">
      <h1 className="text-center mb-3">
        <div>{messages.msg}<br></br></div>
        <i className="fas fa-sign-in-alt"></i>  Login</h1>
      
      <form onSubmit={(event) => handleSubmit(event)} method="POST">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(event) => (handleChange(event))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(event) => (handleChange(event))}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
      <p className="lead mt-4">
        No Account? <a href="/user/register">Register</a>
      </p>
    </div>
  </div>
</div>
    );
}

export default Login;