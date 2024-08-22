'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa6'

function Sidebar() {
	const [sidebar, setSidebar] = useState('')

	return (
		<aside>
			<button
				onClick={() => setSidebar('')}
				className={`${
					sidebar === 'hidden' ? 'top-2 left-1 absolute text-2xl' : 'hidden'
				}`}
			>
				<FaRegLightbulb />
			</button>
			<div
				className={`h-screen border-r-2 border-cyan-400 w-28 ${sidebar}`}
				onClick={() => setSidebar('hidden')}
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
