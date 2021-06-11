import React from 'react';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';

function Content() {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen py-40 font-mono bg-white'>
				<img className='h-full mb-20 rounded shadow' src={ImageOne} alt='Egg' />
				<div className='flex flex-col items-center justify-center'>
					<h2 className='mb-2 text-2xl'>Egg Muffins</h2>
					<p className='mb-2'>Crispy, delicious and nutritious</p>
					<span>$16</span>
				</div>
			</div>

			<div className='flex flex-col items-center justify-center h-screen py-40 font-mono bg-white'>
				<img className='h-full mb-20 rounded shadow' src={ImageTwo} alt='Egg' />
				<div className='flex flex-col items-center justify-center'>
					<h2 className='mb-2 text-2xl'>Egg Salad</h2>
					<p className='mb-2'>Crispy, delicious, and healthy</p>
					<span>$18</span>
				</div>
			</div>
		</>
	);
}

export default Content;
