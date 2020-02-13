import React from 'react';
import './App.css';
import './Insurance.css';
import delta from './pictures/DeltaDental.png';
import cigna from './pictures/cigna-logo.png';
import united from './pictures/UnitedConcordiaLogo.png';
import careCredit from './pictures/care-credit.png';
import majorCards from './pictures/MajorCreditCards.jpg';

function Insurance() {
  return (
    <div className="Insurance">
	<ul> <u><b>Insurances Accepted</b></u>
		<li> Cigna <img className="insurance-logo" src={cigna}/></li>
		<li> Delta Dental <img className="insurance-logo" src={delta}/></li>
		<li> United Concordia <img className="insurance-logo" src={united}/></li>
	</ul>
	<ul> <u><b>Payments Accepted</b></u>
		<li> All Major Credit Cards <img className="insurance-logo" src={majorCards}/></li>
		<li> Care Credit <img className="insurance-logo" src={careCredit}/></li>
	</ul>
    </div>
  );
}

export default Insurance;
