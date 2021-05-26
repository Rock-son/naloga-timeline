import React, { useState } from 'react';

import NavigationElement from "./NavigationElement";
import { familiesNavigation } from "../helpers";



const NavigationBar = () => {

	const [btnActiveId, setBtnActiveId] = useState(0);

	const selectButton = e => {
		const targetId = e.currentTarget.id || 0;
		setBtnActiveId(btnActiveId === targetId ? 0 : targetId );
	}

	return (
		<div className="navigation__container">
			{ familiesNavigation.map(obj => {
				const { 
					id = 0, 
					description = "Leto x", 
					color = "black", 
					superText = "Pred veliko let"
				
				} = obj;
					return (
						<NavigationElement
							key={id}
							id={id}
							description={description}
							color={color}
							superText={superText}
							btnActiveId={btnActiveId}
							onClick={selectButton}
						/>
					);
				})
			}
		</div>
	);
}


export default NavigationBar;