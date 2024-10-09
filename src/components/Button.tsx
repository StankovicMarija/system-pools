import React from 'react';

const Button = ({ children, onClick, className }) => {
	const cls = `py-4 px-5 rounded-lg font-bold text-base text-nowrap text-center ${className}`;
	return (
		<button onClick={onClick} type="button" className={cls}>
			{children}
		</button>
	);
};

export default Button;
