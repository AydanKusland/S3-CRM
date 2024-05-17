import Sidebar from '../../../components/Sidebar'

function layout({ children }: { children: JSX.Element }) {
	return (
		<div>
			<nav className='grid grid-cols-[1fr_80px] justify-center'>
				<ul className='flex justify-center gap-4 border-2'>
					<li>Inspections</li>
					<li>LAB</li>
				</ul>
				<div className='justify-self-center border-2'> SETTINGS</div>
			</nav>
			<div className='grid grid-cols-[130px_1fr] gap-4'>
				<Sidebar />
				{children}
			</div>
		</div>
	)
}
export default layout
