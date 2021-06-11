import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ click, handleClick }) {
	return (
		<div>
			<div
				className={
					click
						? 'flex flex-col items-center justify-center pr-8 font-mono uppercase bg-yellow-500 md:hidden'
						: 'hidden'
				}
				onClick={handleClick}
			>
				<Link className='p-4' to='/'>
					Home
				</Link>
				<Link className='p-4' to='/menu'>
					Menu
				</Link>
				<Link className='p-4' to='/about'>
					About
				</Link>
				<Link className='p-4' to='/contact'>
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Dropdown;
