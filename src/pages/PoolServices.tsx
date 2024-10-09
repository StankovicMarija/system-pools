import React from 'react';

import heroImg from '../assets/heroPckg.webp';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';

const PoolServices = () => (
	<>
		<Header />
		<Hero img={heroImg}>
			<h1 className="text-[#0E245E] mb-4">Pool Services</h1>
			<div className="text-[#0E245E]">
				<p>
					At System Pools LLC, we provide pool maintenance in Rockville MD. Our dedicated technicians do a series of
					tasks to keep your pool’s water clean, balanced, and safe.
				</p>
				<p>
					We work on chemical management, physical cleaning, and system checks to ensure your pool remains in top
					condition.
				</p>
			</div>
		</Hero>
	</>
);

export default PoolServices;
