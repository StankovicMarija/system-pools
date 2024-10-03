import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import close from '../assets/close.png';
import hamb from '../assets/hamburger.png';
import logo from '../assets/logo.png';

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const showMenu = () => {
		setToggleMenu(true);
		document.body.style.overflow = 'hidden';
	};

	const closeMenu = () => {
		setToggleMenu(false);
		document.body.style.overflow = 'visible';
	};

	const cls = 'text-[#002893] font-bold text-base p-1 text-nowrap hover:text-[#57a8ff] md:p-3';
	return (
		<header className="flex flex-row justify-between items-center py-5 px-8">
			<div className="w-full">
				<img src={logo} alt="logo" className="w-60 h-10" />
			</div>
			<nav className="hidden md:flex">
				<ul className="flex list-none">
					<li className={cls}>
						<NavLink to="/">Home</NavLink>
					</li>
					<li className={cls}>
						<NavLink to="/poolService">Pool Services</NavLink>
					</li>
					<li className={cls}>
						<NavLink to="/packages">Packages</NavLink>
					</li>
					<li className={cls}>
						<NavLink to="/aboutUs">About Us</NavLink>
					</li>
					<li className={cls}>
						<NavLink to="/gallery">Gallery</NavLink>
					</li>
					<li className={cls}>
						<NavLink to="/faq">FAQ</NavLink>
					</li>
					<li className={cls}>
						<NavLink to="/contact">Contact</NavLink>
					</li>

					<li className={cls}>
						<NavLink
							to="/contact"
							className="bg-[#3575D3] rounded-lg border-none w-40  text-white cursor-pointer py-3 px-2 hover:bg-[#002893]"
						>
							240-252-8520
						</NavLink>
					</li>
				</ul>
			</nav>
			<button type="button" onClick={showMenu} className="bg-transparent border-none">
				<img src={hamb} alt="hamb" className="w-7 aspect-square md:hidden" />
			</button>
			{toggleMenu ? (
				<nav className="flex flex-col fixed top-0 right-0 p-5 bg-white w-72 shadow-lg min-h-full">
					<button type="button" onClick={closeMenu} className="bg-transparent border-none">
						<img src={close} alt="close" className="w-5 aspect-square cursor-pointer float-right" />
					</button>

					<ul className="flex flex-col items-center list-none active:text[#57a8ff]">
						<li className={cls}>
							<NavLink to="/">Home</NavLink>
						</li>
						<li className={cls}>
							<NavLink to="/poolService">Pool Services</NavLink>
						</li>
						<li className={cls}>
							<NavLink to="/packages">Packages</NavLink>
						</li>
						<li className={cls}>
							<NavLink to="/aboutUs">About Us</NavLink>
						</li>
						<li className={cls}>
							<NavLink to="/gallery">Gallery</NavLink>
						</li>
						<li className={cls}>
							<NavLink to="/faq">FAQ</NavLink>
						</li>
						<li className={cls}>
							<NavLink to="/contact">Contact</NavLink>
						</li>
						<li className={cls}>
							<NavLink
								to="/contact"
								className="bg-[#3575D3] rounded-lg border-none w-40  text-white cursor-pointer py-3 px-2"
							>
								240-252-8520
							</NavLink>
						</li>
					</ul>
				</nav>
			) : null}
		</header>
	);
};

export default Header;
