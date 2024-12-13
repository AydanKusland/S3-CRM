import { getUserFactories } from 'actions/factoriesActions'
import Link from 'next/link'

export default async function MyFactoriesPage() {
	const myFactories = await getUserFactories('Тугов Сергей')
	if (myFactories !== 'Не удалось загрузить заводы')
		return (
			<div className='grid place-content-center min-h-full w-full'>
				<h1 className='text-3xl text-center mb-6'>Мои любимые заводики</h1>
				<div className='flex gap-2 w-full'>
					{myFactories?.map(factory => {
						return (
							<Link
								href={`/factories/${factory.name}`}
								key={factory.name}
								className='border-2 p-1 text-center min-w-fit w-1/3 max-w-screen-sm transition shadow-md shadow-slate-200  hover:scale-105 hover:shadow-lg hover:shadow-lime-300 '
							>
								<p>{factory.name}</p>
								<p>{factory.TN[0]?.name}</p>
								<p>
									{factory.province}
									{'    '}
									{factory.city}
								</p>
							</Link>
						)
					})}
				</div>
			</div>
		)
}
