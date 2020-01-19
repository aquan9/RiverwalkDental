import React from 'react';
import './App.css';
import MissionStatement from './MissionStatement.js';
import VisionStatement from './VisionStatement.js';
import ContactInfo from './ContactInfo.js';
import MeetTheDoctor from './MeetTheDoctor.js';
import OurServices from './OurServices.js';
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
			<MissionStatement />
		</Tab>
		<Tab eventKey="missionAndVision" title="Mission and Vision">
			<MissionStatement />
			<VisionStatement />
		</Tab>
		<Tab eventKey="contactInformation" title="Contact Information">
			<ContactInfo />
		</Tab>
		<Tab eventKey="meetTheDoctor" title="Meet the Doctor">
			<MeetTheDoctor />
		</Tab>
		<Tab eventKey="ourServices" title="Services">
			<OurServices />
		</Tab>
	</Tabs>
    </div>
  );
}

export default App;
