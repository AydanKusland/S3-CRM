import Sidebar from '@/components/Sidebar'

function layout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-screen grid grid-cols-[100px_1fr]'>
			<Sidebar />
			<main className='h-full'>{children}</main>
		</div>
	)
}
export default layout
