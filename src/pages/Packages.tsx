import React from 'react';

import heroImg from '../assets/heroPckg.webp';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';

const Packages = () => (
	<>
		<Header />
		<Hero img={heroImg}>
			<h1 className="text-[#0E245E] mb-4">Packages</h1>
			<div className="text-[#0E245E]">
				<p>Explore our Packages section to discover tailored solutions for all your pool needs.</p>
				<p>
					From maintenance packages to renovation bundles, we offer comprehensive options to suit every preference and
					budget.
				</p>
				<p>Find the perfect package for your pool today.</p>
			</div>
		</Hero>
	</>
);

export default Packages;
