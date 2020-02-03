import React from 'react';
import './App.css';
import MissionStatement from './MissionStatement.js';
import VisionStatement from './VisionStatement.js';
import ContactInfo from './ContactInfo.js';
import MeetTheDoctor from './MeetTheDoctor.js';
import OurServices from './OurServices.js';
import Ecology from './Ecology.js';
import Insurance from './Insurance.js';
import Header from './Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function App() {
  return (
    <div className="App">
	<Header />
	<Tabs defaultActiveKey="home" id="primary-tabs">
		<Tab eventKey="home" title="Home">
			<div id="welcome">Welcome to Riverwalk Dental</div> 
			<MissionStatement />
			<VisionStatement />
		</Tab>
		<Tab eventKey="meetTheDoctor" title="Meet the Doctor">
			<MeetTheDoctor />
		</Tab>
		<Tab eventKey="ourServices" title="Services">
			<OurServices />
		</Tab>
		<Tab eventKey="insurance" title="Payment Options">
			<Insurance />
		</Tab>
		<Tab eventKey="contactInformation" title="Contact Information">
			<ContactInfo />
		</Tab>
		<Tab eventKey="ecology" title="Ecology">
			<Ecology />
		</Tab>
	</Tabs>
    </div>
  );
}

export default App;
