import React from 'react';
import './App.css';
import './Header.css';
import logo from './pictures/new-logo-edited-compressed.png';
import logobw from './pictures/riverwalk-bw.jpg';
import phone from './pictures/telephone-outbound-fill.svg';

function Header() {
  return (
    <div className="Header">
	<div className="container" id="HeaderContainer">
		<div className="logo">	
			<img src={logo} alt="The company logo"/>
		</div>
		<div className="title">
			<h1 id="mainTitle">Riverwalk Dental</h1>
			<h2 id="subTitle">Inspiring a healthy community through nurturing oral care</h2>
            <a href="tel:5053360696"><img id="subTitle" width="50px" height="50px" src={phone} /></a>
		</div>
	</div>
    </div>
  );
}

export default Header;
