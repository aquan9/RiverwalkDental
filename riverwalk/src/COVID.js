import React from 'react';
import './App.css';
import './COVID.css';

function Covid() {
  return (
    <div className="Covid">
	<div className="container">

		<div className="left">
		<p><b>COVID-19 Updates</b></p>
		<p>Dear Valued Patient,</p>
		<p>We hope this letter finds you and your family well. We are excited to be opened and
here ready to help you with your dental needs. We are taking all the extra
precautions in order to keep you and our staff as safe as possible.</p>
		<p>The following are some changes you will see before and during your appointment:</p>
		<ul className="prevention-list">
		<li>If you are a new patient, we can email you the registration forms to be filled
out at your convenience and in the comfort of your home. You will then bring
the completed forms with you to your appointment. If you would rather fill
out the paper work on the day of your appointment, we ask that you wait in
your car and one of our team members will bring the forms out to your car.</li>
		<li>Upon arrival we will greet you at your car and take your temperature with
our no contact thermometer.</li>
		<li>We will ask a few questions regarding COVID-19 to ensure we all stay as safe
as possible.</li>
		<li>We have installed HEPA air purifiers in all the rooms and are allowing extra
time between patients to clear the air in the treatment rooms.</li>
		<li>We will be wiping down all high touch areas throughout the day.</li>
		<li>We ask that all patients wear a mask when entering the office and when
leaving at the end of the appointment.</li>
		<li>The dentist and staff will have extra protective gear on, sometimes it will be
hard to see our faces but you can rest assure that we are greeting you with a
smile.</li>
		</ul>
		
		<p>Thank you for trusting in us to deliver the safest dental experience as possible. We
look forward to seeing you and your family soon. Stay safe Santa Fe!</p>

		<p>All the Best,</p>
		<p>Your team at Riverwalk Dental</p>
		</div>
		
	</div>
    </div>
  );
}

export default Covid;
