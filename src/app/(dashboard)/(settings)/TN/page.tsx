import Link from 'next/link'
import prisma from '@/prisma/db'

export default async function SettingsPage() {
	const user = await prisma.user.findUnique({
		where: {
			fullName: 'Тугов Сергей'
		},
		include: {
			TN: true
		}
	})

	return (
		<section className='grid h-full place-content-center pb-6 px-6'>
			<h3 className='text-center my-10 text-2xl select-none hover:scale-105 hover:-rotate-1 transition'>
				&#x1F60D; Мои товарные направления &#x1F60D;
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 justify-around gap-x-8 gap-y-6 text-center'>
				{user?.TN.map(napravlenie => {
					return (
						<Link
							href={`/TN/${napravlenie.number}`}
							key={napravlenie.number}
							className='border-2 border-cyan-200 p-2 bg-zinc-800 hover:bg-zinc-900 hover:scale-105 hover:border-cyan-500 transition-all'
						>
							<h3 className='text-lg mb-1'>
								{napravlenie.name} {napravlenie.number}
							</h3>
							<p>РТН: {napravlenie.RTN}</p>
							<p>Инженер ЦО: {napravlenie.reportEngineer}</p>
						</Link>
					)
				})}
				<Link
					href={`/TN/add`}
					className='grid mb-20 place-items-center border-2 border-cyan-200 bg-slate-700 h-full text-lg text-center hover:translate-y-1 hover:scale-95 hover:text-red-500 transition'
				>
					<p>Добавить товарное направление!</p>
				</Link>
			</div>
		</section>
	)
}
