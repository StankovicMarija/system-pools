import React from 'react';

import heroImg from '../assets/herogallery.webp';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import WhyUs from '../components/WhyUs.tsx';

const Gallery = () => (
	<>
		<Header />
		<Hero img={heroImg}>
			<h1 className="text-[#0E245E] mb-4">Gallery</h1>
			<div className="text-[#0E245E]">
				<p>
					Browse through our captivating gallery to discover stunning visuals of our work. From breathtaking pool
					designs to impeccable installations, let our gallery inspire your next project.
				</p>
			</div>
		</Hero>
		<WhyUs />
	</>
);

export default Gallery;
