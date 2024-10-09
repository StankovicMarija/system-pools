import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutUs from './pages/AboutUs.tsx';
import Contact from './pages/Contact.tsx';
import Faq from './pages/Faq.tsx';
import Gallery from './pages/Gallery.tsx';
import Home from './pages/Home.tsx';
import Packages from './pages/Packages.tsx';
import PoolServices from './pages/PoolServices.tsx';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/poolServices" element={<PoolServices />} />
			<Route path="/packages" element={<Packages />} />
			<Route path="/aboutUs" element={<AboutUs />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/faq" element={<Faq />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</BrowserRouter>
);

export default App;
