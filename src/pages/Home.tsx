import React from 'react';
import { useNavigate } from 'react-router-dom';

import fbIcon from '../assets/fb.webp';
import heroImg from '../assets/hero1.webp';
import instaIcon from '../assets/insta.webp';
import Button from '../components/Button.tsx';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import OptimizedImg from '../components/UI/OptimizedImg.tsx';
import WhyUs from '../components/WhyUs.tsx';

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<Hero img={heroImg}>
				<div className="flex flex-col md:flex-row md:items-start">
					<div>
						<h3 className="text-[#3575D3] mb-4">WE ARE SYSTEMPOOLS</h3>
						<h1 className="text-[#0E245E]">
							<span className="text-[#3575D3]">Quality</span> Without Compromise!
						</h1>
						<p className="text-[#0E245E] text-[18px] font-medium capitalize my-4">
							Your Satisfaction, Our Commitment: The Trusted Name in Pools
						</p>
					</div>
					<div className="flex mr-2 w-24 md:mr-5">
						<OptimizedImg src={instaIcon} alt="insta-icon" className="mr-2 w-10" />
						<OptimizedImg src={fbIcon} alt="fb-icon" className="w-10" />
					</div>
				</div>
				<div>
					<Button onClick={() => navigate('/contact')} className="text-white bg-[#3575D3] mt-4">
						GET A FREE QUOTE
					</Button>
				</div>
			</Hero>
			<WhyUs />
		</>
	);
};

export default Home;
