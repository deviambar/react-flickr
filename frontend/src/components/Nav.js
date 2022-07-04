import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';

const Nav = props => (

  <header>
  	{ (props.location.pathname.startsWith('/search') )
  		? <SearchForm props={props} apiKey="be62b8fd6260c4f8f8b4f845623d0257" />
  		: <br /> }
	<nav className="main-nav">
	  <ul>
		<li><NavLink to='/search'>Search</NavLink></li>
		<li><NavLink to='/rose'>Example Flowers</NavLink></li>
		<li><NavLink to='/dogs'>Example Animals</NavLink></li>
	  </ul>
    </nav>
  </header>
);
export default Nav;
