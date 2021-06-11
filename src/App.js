import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages';
import { About } from './pages/about';
import { Menu } from './pages/menu';
import { Contact } from './pages/contact';
import Dropdown from './components/Dropdown';

function App() {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};

	return (
		<>
			<Navbar handleClick={handleClick} click={click} />
			<Dropdown click={click} handleClick={handleClick} />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/menu' component={Menu} />
				<Route path='/contact' component={Contact} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
