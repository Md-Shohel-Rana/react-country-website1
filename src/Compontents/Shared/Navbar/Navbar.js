import React from 'react';
import logo from '../../../images/website (1).png';


const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-dark'>
  <div className="container">
    <a className="navbar-brand text-white" href="/"><img width={80} className='img-fluid' src={logo} alt=''/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        <a className="nav-link text-white " href="/">Country</a>
       
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;