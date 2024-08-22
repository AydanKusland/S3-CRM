import Sidebar from '@/components/Sidebar'

function layout({ children }: { children: JSX.Element }) {
	// [100px_1fr]
	return (
		// <div className='grid grid-flow-col'>
		<div className='grid grid-cols-[110px_1fr]'>
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}
export default layout
