import React from 'react';

import heroImg from '../assets/heroFaq.webp';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import WhyUs from '../components/WhyUs.tsx';

const Faq = () => (
	<>
		<Header />
		<Hero img={heroImg}>
			<h1 className="text-[#0E245E] mb-4">FAQ</h1>
			<p className="text-[#0E245E]">
				Explore our FAQ section to find answers to commonly asked questions. We’ve compiled helpful information to
				address any queries you may have about our services, ensuring a smooth and informed experience.
			</p>
		</Hero>
		<WhyUs />
	</>
);

export default Faq;
