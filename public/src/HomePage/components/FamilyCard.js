import React from 'react';

const FamilyCard = props => {

	const { text, description, image } = props;
	return (
		<li className="card">
			{ image != null ? <img src={image} alt={description} className="card__image"/> : "" }
			<div className="card__text-container">
				{image != null ? <div className="card__text-container__cancel-btn"><i className="far fa-times-circle"></i></div> : ""}
				<div className="card__text-container__paragraph">{text}</div>
				<div className="card__text-container__description">
					<i className="fa fa-arrow-left"></i>
					{description}
				</div>
			</div>	
		</li>
	);
}


export default FamilyCard;