import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({ to, children, className = '' }) => (
	<NavLink className={className} to={to}>
		{children}
	</NavLink>
);

export default CustomLink;
