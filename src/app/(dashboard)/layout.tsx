import Sidebar from '@/components/Sidebar'

function layout({ children }: { children: JSX.Element }) {
	return (
		<div className='grid grid-cols-[100px_1fr]'>
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}
export default layout
