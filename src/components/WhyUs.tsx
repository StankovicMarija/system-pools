import React from 'react';

import blue from '../assets/why-us/blue.webp';
import family from '../assets/why-us/family.webp';
import guarantee from '../assets/why-us/guarantee.webp';
import people from '../assets/why-us/people.webp';
import price from '../assets/why-us/price.webp';

import OptimizedImg from './UI/OptimizedImg.tsx';

const whyUsContent = [
	{
		icon: price,
		title: 'Transparent Pricing',
		text: 'Rest easy with our transparent pricing model, ensuring clarity and fairness in every transaction.',
	},
	{
		icon: people,
		title: 'Experienced Team',
		text: 'Rely on the proficiency of our experienced team to tackle any pool service with expertise and precision.',
	},
	{
		icon: blue,
		title: 'Transparent Pricing',
		text: 'Benefit from the expertise of our highly trained professionals.',
	},

	{
		icon: guarantee,
		title: 'Transparent Pricing',
		text: 'Enjoy peace of mind with our comprehensive warranty support, providing assurance and protection for your investment.',
	},
	{
		icon: family,
		title: 'Transparent Pricing',
		text: 'Experience personalized service and genuine care from our family-owned business, where customer satisfaction is our top priority.',
	},
];

const WhyUs = () => (
	<div className="p-8 flex flex-col lg:flex-row">
		{whyUsContent.map(({ icon, title, text }) => (
			<div className="flex flex-col items-center my-[32px] lg:w-[20%] lg:px-8">
				<OptimizedImg src={icon} className="text-center" />
				<p className="text-[#0E245E] text-center my-4">{title}</p>
				<p className="text-[#7e7e7e] text-center">{text}</p>
			</div>
		))}
	</div>
);
export default WhyUs;
