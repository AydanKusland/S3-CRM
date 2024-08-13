import Sidebar from '@/components/Sidebar'

function layout({ children }: { children: JSX.Element }) {
	// [100px_1fr]
	return (
		<div className='grid grid-flow-col'>
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}
export default layout
