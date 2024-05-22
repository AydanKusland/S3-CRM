import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

function layout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-screen'>
			<Navbar />

			<main className='grid grid-cols-[115px_1fr] h-full'>
				<Sidebar />
				{children}
			</main>
		</div>
	)
}
export default layout
