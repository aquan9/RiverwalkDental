import React from 'react';
import './App.css';
import MissionStatement from './MissionStatement.js';
import VisionStatement from './VisionStatement.js';
import WelcomeStatement from './WelcomeStatement.js';
import ContactInfo from './ContactInfo.js';
import MeetTheDoctor from './MeetTheDoctor.js';
import OurServices from './OurServices.js';
import Ecology from './Ecology.js';
import Insurance from './Insurance.js';
import Header from './Header.js';
import Covid from './COVID.js';
import NewPatient from './NewPatient.js';
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
			<WelcomeStatement />
			<MissionStatement />
			<VisionStatement />
			<p className="callToday">Call us, or text us today to schedule your appointment!</p>
            <p className="callToday">(505) 336-0696</p>
			<p className="callToday">Weekend hours are available</p>
            <p className="callToday">Address: 3252 Cerrillos Rd. Ste #A, Santa Fe, NM 87507</p>
		</Tab>
		<Tab eventKey="meetTheDoctor" title="About us">
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
        <Tab eventKey="newPatientForm" title="New Patient Form">
            <NewPatient />
        </Tab>
		<Tab eventKey="ecology" title="Eco-friendly">
			<Ecology />
		</Tab>
		<Tab eventKey="covid" title="COVID-19">
			<Covid />
		</Tab>
	</Tabs>
    </div>
  );
}

export default App;
