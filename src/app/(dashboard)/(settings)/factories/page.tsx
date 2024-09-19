import { getUserFactories } from 'actions/factoriesActions'

export default async function MyFactoriesPage() {
	const myFactories = await getUserFactories('Тугов Сергей')
	if (myFactories !== 'Не удалось загрузить заводы')
		return (
			<div className='grid place-content-center min-h-full w-full'>
				<h1 className='text-3xl mb-6'>Мои любимые заводики</h1>
				<div className='flex w-full'>
					{myFactories?.map(factory => {
						return (
							<article
								key={factory.name}
								className='border-2 text-center min-w-fit w-1/3 max-w-screen-sm'
							>
								<p>{factory.name}</p>
								<p>{factory.province}</p>
								<p>{factory.city}</p>
								<p>{factory.address}</p>
								<p>{factory.fullName}</p>
								<p>{factory.fullNameCN}</p>
								<p>{factory.product}</p>
							</article>
						)
					})}
				</div>
			</div>
		)
}
