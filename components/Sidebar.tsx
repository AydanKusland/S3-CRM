'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa6'

function Sidebar() {
	const [sidebar, setSidebar] = useState('border-r-2')

	return (
		<aside>
			<button
				onClick={() => setSidebar('border-r-2')}
				className={`${
					sidebar === 'w-0'
						? 'top-4 left-1 absolute text-2xl transition-all'
						: 'hidden'
				}`}
			>
				<FaRegLightbulb />
			</button>
			<div
				className={`h-screen border-cyan-400 w-24 transition-all overflow-hidden ${sidebar}`}
				onClick={() => setSidebar('w-0')}
			>
				<ul className='grid items-center h-full text-center'>
					<Link href={'/inspections'}>Inspections</Link>
					{/* <button>Stats</button> */}
					<Link href={'/settings'} className='block mx-auto'>
						Settings
					</Link>
					<Link href={'/users'} className='block mx-auto'>
						Users
					</Link>
				</ul>
			</div>
		</aside>
	)
}
export default Sidebar
