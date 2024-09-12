import { getUserFactories } from 'actions/factoriesActions'

export default async function MyFactoriesPage() {
	const myFactories = await getUserFactories('Тугов Сергей')
	if (myFactories !== 'Не удалось загрузить заводы')
		return (
			<div className='grid place-content-center min-h-full'>
				<h1 className='text-3xl'>Мои любимые заводики</h1>
				{myFactories?.map(factory => {
					return (
						<article key={factory.name} className='border-2'>
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
		)
}
