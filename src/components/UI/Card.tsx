import React from 'react';

const Card = ({ children }) => (
	<div className="absolute top-[65%] translate-y-[-50%] left-[50%] translate-x-[-50%] md:top-[50%] md:left-[60%] md:translate-x-[-50%] rounded-lg shadow-md bg-[#fff] min-w-[350px] p-5 md:p-9">
		{children}
	</div>
);

export default Card;
