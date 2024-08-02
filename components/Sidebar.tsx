import Link from 'next/link'

function Sidebar() {
	return (
		<aside className='w-full border-2'>
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
