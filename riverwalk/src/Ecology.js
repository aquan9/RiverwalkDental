import React from 'react';
import './App.css';
import './Ecology.css';
import recyclingIcon from './pictures/kawaii-earth.png';

function Ecology() {
  return (
    <div className="Ecology">
	<div className="container">

		<div className="left">
		<p><b>Help our community go GREEN</b></p>
		<p>Here at Riverwalk Dental we are passionate about preserving our environment. We
are making strides to help eliminate waste and protect our environment while still
following safe dental practices. Whenever possible we use products that are
biodegradable or sustainably sourced.</p>
		<p>Toothbrushes have become increasingly damaging to our planet. Over one billion
toothbrushes end up in landfills every year and take over 400 years to decompose.
At Riverwalk Dental we believe that every small step toward preserving our
environment is an important one. We are happy to announce that we only give out
biodegradable bamboo toothbrushes.</p>
		<p>Ways we can help eliminate waste in our daily lives:</p>
		<ul className="waste-list">
			<li>Use reusable bags whenever possible.</li>
			<li>Eliminate single use plastic products (e.g. plastic bottles, ziplock bags)</li>
			<li>Eat more local products to help reduce biofuel emissions and packaging wastes</li>
			<li>RECYCLE, RECYCLE, RECYCLE!</li>
		</ul>
		<p>We can all make a difference! Let’s be committed to a healthy lifestyle and keeping our planet beautiful!</p>
		
		</div>
		<div className="right">
			<img className="picture" src={recyclingIcon} alt="the universal recycling logo" />
		</div>
	</div>
    </div>
  );
}

export default Ecology;
