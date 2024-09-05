'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa6'

function Sidebar() {
	const [sidebar, setSidebar] = useState(true)

	const handleSidebar = (e: React.MouseEvent<HTMLElement>) => {
		if (e.target instanceof Element && e.target.tagName !== 'A')
			setSidebar(false)
	}

	return (
		<>
			<aside
				className={`h-screen overflow-hidden transition-all  ${
					sidebar
						? 'border-cyan-600 absolute z-10 bg-cyan-950 w-screen md:px-2 md:max-w-28 md:bg-inherit md:relative md:border-r-2'
						: 'max-w-0 border-none px-0'
				}`}
				onClick={e => handleSidebar(e)}
			>
				<ul className='grid items-center h-full text-center '>
					<Link
						href={'/inspections'}
						className='hover:text-cyan-100 transition'
					>
						Inspections
					</Link>
					<Link href={'/settings'} className='hover:text-cyan-100 transition'>
						Settings
					</Link>
					<Link href={'/users'} className='hover:text-cyan-100 transition'>
						Users
					</Link>
				</ul>
			</aside>
			<button
				onClick={() => setSidebar(true)}
				className={`absolute transition-all top-4 left-1 ${
					sidebar ? 'text-sm  invisible' : ' text-2xl '
				}`}
			>
				<FaRegLightbulb />
			</button>
		</>
	)
}
export default Sidebar
