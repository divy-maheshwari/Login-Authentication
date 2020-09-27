import React from "react";
import axios from "axios";

function Dashboard() {
    const handleClick = () => {
        axios.get('http://localhost:5000/user/logout')
    }
    return (
        <div>
        <h1 className="mt-4">Dashboard</h1>
<p className="lead mb-3">Welcome </p>
<a className="btn btn-secondary" onClick={() => handleClick()}>Logout</a>
</div>
    );
}

export default Dashboard;