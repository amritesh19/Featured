import React from 'react';
import { 
    NavLink,
    Link
 } from './navBar.styles';

const NavBar = ({ user }) => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Featured</Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
      
        <NavLink className="nav-link nav-item" to="/movies">Movies</NavLink>
      
        <NavLink className="nav-link nav-item" to="/guide">Guide</NavLink>
      
        <NavLink className="nav-link nav-item" to="/info">Info</NavLink>
      
      {!user && (
      <React.Fragment>
        
          <NavLink className="nav-link nav-item" to="/login">Login</NavLink>
    
          <NavLink className="nav-link nav-item" to="/register">Register</NavLink>

      </React.Fragment>
      )}
      {user && (
      <React.Fragment>
        
          <NavLink className="nav-link nav-item" to="/profile">{user.name}</NavLink>
        
          <NavLink className="nav-link nav-item" to="/logout">Logout</NavLink>
        
      </React.Fragment>
      )}
    </ul>
  </div>
</nav>
     );
}
 
export default NavBar;