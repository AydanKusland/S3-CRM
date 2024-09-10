'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa6'

function Sidebar() {
	const [sidebar, setSidebar] = useState(true)

	const handleSidebar = (e: React.MouseEvent<HTMLElement>) => {
		if (e.target instanceof Element && e.target.tagName !== 'A')
			setSidebar(false)
		if (screen.width < 768) setSidebar(false)
	}

	return (
		<>
			<aside
				className={`h-full overflow-hidden transition-all border-my-darkerGreen ${
					sidebar
						? 'z-10 bg-lime-900 w-screen md:px-2 md:max-w-12 md:bg-inherit md:relative md:border-r-2'
						: 'max-w-0 border-none px-0'
				}`}
				onClick={e => handleSidebar(e)}
			>
				<ul className='grid md:grid-flow-col justify-evenly items-center h-screen text-center text-lg transition md:my-vertical-text '>
					<Link
						href={'/inspections'}
						className='hover:text-cyan-100 hover:text-xl transition-all duration-500 hover:tracking-normal'
					>
						Инспекции
					</Link>
					<Link
						href={'/TN'}
						className='hover:text-cyan-100 hover:text-xl transition-all duration-500 hover:tracking-normal'
					>
						ТН
					</Link>
					<Link
						href={'/users'}
						className='hover:text-cyan-100 hover:text-xl transition-all duration-500 hover:tracking-normal'
					>
						Пользователи
					</Link>
				</ul>
			</aside>
			<button
				onClick={() => setSidebar(true)}
				className={`absolute transition-all top-4 left-1 ${
					sidebar ? 'text-sm  invisible' : 'z-10 text-2xl '
				}`}
			>
				<FaRegLightbulb />
			</button>
		</>
	)
}
export default Sidebar
