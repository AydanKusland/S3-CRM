// get current user

import Link from 'next/link'
import prisma from 'utils/db'

async function page() {
	const user = await prisma.user.findUnique({
		where: {
			fullName: 'Тугов Сергей'
		},
		include: {
			TN: true
		}
	})

	return (
		<section className='max-w-screen-xl mx-auto pt-5 px-8'>
			<h3 className='text-center mb-8 text-xl select-none hover:scale-105 hover:-rotate-1 transition'>
				&#x1F60D; Мои товарные направления &#x1F60D;
			</h3>
			<div className='grid grid-cols-3 justify-around gap-6 text-center'>
				{user?.TN.map(napravlenie => {
					return (
						<Link
							href={`/settings/TN/${napravlenie.number}`}
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
			</div>
			<Link
				href={`settings/TN/add`}
				className='block mt-8 text-center hover:translate-y-2 hover:scale-95 hover:text-red-500 transition'
			>
				Добавить товарное направление!
			</Link>
		</section>
	)
}

export default page
