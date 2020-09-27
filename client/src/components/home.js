import React from "react";

function Home() {
    return (
        <div className="row mt-5">
  <div className="col-md-6 m-auto">
    <div className="card card-body text-center">
      <h1><i className="fab fa-node-js fa-3x"></i></h1>
      <p>Create an account or login</p>
      <a href="/user/register" className="btn btn-primary btn-block mb-2">Register</a>
      <a href="/user/login" className="btn btn-secondary btn-block">Login</a>
    </div>
  </div>
</div>
    );
}

export default Home;