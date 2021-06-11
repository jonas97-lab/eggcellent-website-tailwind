import { Link } from 'react-router-dom';

function Navbar({ handleClick, click }) {
	return (
		<nav className='relative flex items-center justify-between h-16 font-mono text-gray-900 bg-white shadow-sm'>
			<Link className='pl-8 uppercase' to='/'>
				Egg
			</Link>
			<div className='px-4 cursor-pointer md:hidden' onClick={handleClick}>
				<svg
					className={click ? 'hidden' : 'w-6 h-6'}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
					/>
				</svg>

				<svg
					className={click ? 'w-6 h-6' : 'hidden'}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M5 11l7-7 7 7M5 19l7-7 7 7'
					/>
				</svg>
			</div>
			<div className='hidden pr-8 md:block'>
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
		</nav>
	);
}

export default Navbar;
