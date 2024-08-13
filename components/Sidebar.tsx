'use client'

import Link from 'next/link'
import { useState } from 'react'

function Sidebar() {
	const [sidebar, setSidebar] = useState('')

	return (
		<aside
			className={`h-screen border-2 ${sidebar}`}
			onClick={() => setSidebar('hidden')}
		>
			<ul className='grid items-center h-full text-center'>
				<Link href={'inspections'}>Inspections</Link>
				<button>Stats</button>
				<Link href={'settings'} className='block mx-auto'>
					Settings
				</Link>
				<Link href={'users'} className='block mx-auto'>
					Users
				</Link>
			</ul>
		</aside>
	)
}
export default Sidebar
