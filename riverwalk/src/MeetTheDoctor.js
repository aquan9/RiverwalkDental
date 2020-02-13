import React from 'react';
import './App.css';
import './MeetTheDoctor.css';
import claudiaHeadshot from './pictures/claudia-with-lilly-cropped.jpg';

function MeetTheDoctor() {
  return (
    <div className="MeetTheDoctor">
	<div className="container">
		<div className="left">
			<p><b>Claudia L. Quan DDS</b></p>
			<img className="headshot" src={claudiaHeadshot} alt="Headshot of the dentist" />
		</div>

		<div className="right">
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
		<p>Name: Claudia Quan</p>
		<p>Hobbies: Yoga, Dancing, Spending time with family</p>
		<p>Graduated Dental School from: University of Colorado School of Dental Medicine</p>
		<p>Residency: UNM Advanced Education in General Dentistry</p>
		<p>Years in practice: 6</p>
		</div>
	</div>
    </div>
  );
}

export default MeetTheDoctor;
