function Sidebar() {
	return (
		<aside className='w-full border-2'>
			<ul className='grid items-center h-full text-center'>
				<button>Inspections</button>
				<button>Stats</button>
				<button className='block mx-auto'> Settings</button>
			</ul>
		</aside>
	)
}
export default Sidebar
