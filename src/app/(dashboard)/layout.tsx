import Sidebar from '@/components/Sidebar'

function layout({ children }: { children: JSX.Element }) {
	return (
		<div className='grid grid-cols-[auto_1fr]'>
			<Sidebar />
			<main className='h-full'>{children}</main>
		</div>
	)
}
export default layout
