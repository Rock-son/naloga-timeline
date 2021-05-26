import React, { useState } from 'react';

import NavigationElement from "./NavigationElement";
import { familiesNavigation } from "../helpers";


/**
 * 
 * @returns navigation bar, with buttons, supertext and navigation and ui logic
 */
const NavigationBar = () => {

	const [btnActiveId, setBtnActiveId] = useState(0);
	const [btnHoveredId, setBtnHoveredId] = useState(0);

	const toggleButton = e => {
		const targetId = e.currentTarget.id || 0;
		setBtnActiveId(btnActiveId === targetId ? 0 : targetId );
	}
	const onMouseEnter = e => {
		const targetId = e.currentTarget.id || 0;
		setBtnHoveredId(btnHoveredId === targetId ? 0 : targetId );
	}
	const onMouseLeave = () => setBtnHoveredId(0)

	return (
		<div className="navigation__container">
			{ familiesNavigation.map(obj => {
				const { 
					id = 0, 
					description = "Leto x", 
					color = "black", 
					superscript = "Pred neskončno let"
				
				} = obj;
					return (
						<NavigationElement
							key={id}
							id={id}
							description={description}
							color={color}
							superscript={superscript}
							btnActiveId={btnActiveId}
							btnHoveredId={btnHoveredId}
							toggleButton={toggleButton}
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}
						/>
					);
				})
			}
		</div> 
	);
}


export default NavigationBar;