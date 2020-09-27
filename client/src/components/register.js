import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";


function Register() {
  
  const [form, setForm] = useState({ name: '', email: '', password: '', password2: '' });
  const [messages,setMessages] = useState([]);
  const history = useHistory();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:5000/user/register',{
      name: form.name,
      email: form.email,
      password: form.password,
      password2: form.password2
    })
    .then(data => {  
      if(data.data.length === 0){
      history.push('/user/login');
      }
      else {
        history.push('/user/register');
        setMessages(data.data);
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
        {messages.map( message => 
                <div>{message.msg}<br></br></div> 
                  
          )}
        <i className="fas fa-user-plus"></i> Register
      </h1>
      
      <form onSubmit={(event) => handleSubmit(event)} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            onChange={(event) => handleChange(event)}
            value={form.name}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(event) => handleChange(event)}
            value={form.email}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Create Password"
            onChange={(event) => handleChange(event)}
            value={form.password}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(event) => handleChange(event)}
            value={form.password2}
            
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
      </form>
      <p className="lead mt-4">Have An Account? <a href="/user/login">Login</a></p>
    </div>
  </div>
</div>
    );
}

export default Register;