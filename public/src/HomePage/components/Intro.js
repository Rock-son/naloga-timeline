import React from 'react';

const Intro = props => {

	const { text, description } = props;
	return (
		<li className="card">
			<div className="card__text-container">
				<div className="card__text-container__caption">{description}</div>
				<div className="card__text-container__paragraph">{text}</div>				
			</div>	
		</li>
	);
}


export default Intro;