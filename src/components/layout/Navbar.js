import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { auth } from '../../config/fbconfig';
import M from 'materialize-css';

const Navbar = () => {
  useEffect(() => {
    // Initialize Materialize CSS components
    M.AutoInit();
  }, []);

  return (
    <>
      <nav className='green'>
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo">Notebook</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/favorites">Favorite Notes</NavLink></li>
            <li><NavLink to="/"><button className='btn green' onClick={() => auth.signOut()}>Logout</button></NavLink></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to="/favorites">Favorite Notes</NavLink></li>
        <li><NavLink to="/"><button className='btn green' onClick={() => auth.signOut()}>Logout</button></NavLink></li>
      </ul>
    </>
  );
}

export default Navbar;
