import React from 'react';
import './App.css';
import './MeetTheDoctor.css';
import claudiaHeadshot from './pictures/claudia_headshot2.jpg';
import ramonaHeadshot from './pictures/purple-flowers.jpg';

function MeetTheDoctor() {
  return (
    <div className="MeetTheDoctor">
	<div className="container">
		<div className="left">
			<p><b>Claudia L. Quan DDS</b></p>
			<img className="headshot" src={claudiaHeadshot} alt="Headshot of the dentist" />
            <br/>
            <br/>
            <br/>
            <p><b>Ramona Gonzalez</b></p>
            <img className="headshot" src={ramonaHeadshot} alt="Headshot of the assistant Ramona" />
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

        <hr/>
        <hr/>
        <hr/>
        <p>I began my career in 2017 after completing the dental assisting program at Luna Community College. In 2018, I obtained certification through the Dental Assisting National Board. I enjoy dentistry because it is not repetitive, every patient and procedure is different. There is always something new to learn. In my spare time I enjoy spending time with family, shopping and fishing. </p>
        <p>Name: Ramona Gonzalez</p>
        <p>Certifications: Certified Dental Assistant</p>


		</div>
	</div>
    </div>
  );
}

export default MeetTheDoctor;
