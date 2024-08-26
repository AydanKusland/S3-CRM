'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa6'

function Sidebar() {
	const [sidebar, setSidebar] = useState(true)

	return (
		<aside>
			<button
				onClick={() => setSidebar(true)}
				className={`${
					sidebar ? 'hidden' : 'top-4 left-1 absolute text-2xl transition-all'
				}`}
			>
				<FaRegLightbulb />
			</button>
			<div
				className={`h-screen border-cyan-400 w-24 transition-all overflow-hidden border-r-2 ${
					sidebar || 'border-r-0 -translate-x-40 w-0 hidden'
				}`}
				onClick={() => setSidebar(false)}
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
