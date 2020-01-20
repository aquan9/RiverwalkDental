import React from 'react';
import './App.css';
import './Header.css';
import logo from './pictures/RiverwalkLogo.jpg';
import logobw from './pictures/riverwalk-bw.jpg';

function Header() {
  return (
    <div className="Header">
	<div className="container">
		<div className="logo">	
			<img src={logo} alt="The company logo"/>
		</div>
		<div className="title">
			<h1 id="mainTitle">Riverwalk Dental</h1>
			<h2 id="subTitle">Inspiring a healthy community through nurturing oral care</h2>
		</div>
	</div>
    </div>
  );
}

export default Header;
