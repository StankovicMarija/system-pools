import React from 'react';

import heroImg from '../assets/heroabout.webp';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';

const AboutUs = () => (
	<>
		<Header />
		<Hero img={heroImg}>
			<h1 className="text-[#0E245E] mb-4">About Us</h1>
			<p className="text-[#0E245E]">
				We’re your dedicated pool care experts, committed to delivering excellence with every splash. Dive into our
				story and discover why we’re the preferred choice for all your pool service needs.
			</p>
		</Hero>
	</>
);

export default AboutUs;
