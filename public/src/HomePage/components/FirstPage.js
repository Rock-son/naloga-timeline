import React from 'react';

import image1 from "../assets/druzina1.jpg";
import { textObj1 } from "../helpers"

const FirstFamily = props => {

	const { text } = textObj1;
	return (
		<>
			<img src={image1} alt="Družina - prve skupnosti" className="card__image"/>
			<div className="card__text-container">
				<div className="card__text-container__cancel-btn"><i className="far fa-times-circle"></i></div>
				<div className="card__text-container__paragraph">{text}</div>
				<div className="card__text-container__description">
					<i className="fa fa-arrow-left"></i>
					Prve skupnosti</div>
			</div>	
		</>
	);
}


export default FirstFamily;