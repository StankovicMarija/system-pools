import React from 'react';

import heroImg from '../assets/herocont.webp';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';

const Contact = () => (
	<>
		<Header />
		<Hero img={heroImg}>
			<h1 className="text-[#0E245E] mb-4">Contact</h1>
			<p className="text-[#0E245E]">
				Reach out to us effortlessly through our contact section. Whether you have questions, need assistance, or want
				to discuss your pool project, we’re here to help. Connect with our friendly team today to start the
				conversation..
			</p>
		</Hero>
	</>
);

export default Contact;
