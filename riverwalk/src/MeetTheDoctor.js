import React from 'react';
import './App.css';
import './MeetTheDoctor.css';
import claudiaHeadshot from './pictures/claudia_headshot.jpg';

function MeetTheDoctor() {
  return (
    <div className="MeetTheDoctor">
	<p>Claudia L. Quan DDS</p>
	<img src={claudiaHeadshot} alt="Headshot of the dentist" />

	<p>When I observe nature I am immediately mesmerized by its beauty, and even
more mesmerized that behind such beauty exists form and function, which
together blend in perfect harmony. I love nature and all it has to offer. I can’t
help but to relate dentistry to nature where form and function are subtly
hidden behind beauty.</p>

	<p>I invite you with an open mind to explore all your dental possibilities, allow us
to gently ease any dental anxiety you may be holding on to, help you heal from
oral disease and celebrate your unique beauty. With you in control of your
dental health and the help of our wonderful team at Riverwalk Dental, the
possibilities are endless.</p>
    </div>
  );
}

export default MeetTheDoctor;
