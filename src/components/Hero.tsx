import React from 'react';

import Card from './UI/Card.tsx';
import OptimizedImg from './UI/OptimizedImg.tsx';

const Hero = ({ children, img }) => (
	<div className="relative">
		<Card>{children}</Card>;
		<div className="flex flex-col md:flex-row w-full bg-[#3575d3]">
			<div>
				<OptimizedImg src={img} alt="hero-img" className="object-cover" />
			</div>
			<div className="bg-[#3575d3] min-h-56" />
		</div>
	</div>
);

export default Hero;
