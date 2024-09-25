import EditFactoryButton from '@/components/Factories Components/EditFactoryButton'
import { PROVINCE_LIST } from '@/utils/CONSTANTS'
import { getFactory } from 'actions/factoriesActions'

export default async function FactoryPage({
	params: { name }
}: {
	params: { name: string }
}) {
	const factory = await getFactory(name)
	// const TN: string[] = []
	if (factory && typeof factory !== 'string')
		return (
			<div className='h-full grid place-content-center text-center'>
				<h1 className='text-2xl mb-6 hover:text-my-darkGreen transition cursor-pointer'>
					{factory.name}
				</h1>
				<form className='grid h-full place-content-center drop-shadow-lg text-center gap-1'>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='name' className='justify-self-end'>
							Краткое название поставщика:
						</label>
						<input required name='name' id='name' defaultValue={factory.name} />
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='fullName' className='justify-self-end'>
							Полное название поставщика:
						</label>
						<input
							name='fullName'
							id='fullName'
							placeholder={factory.fullName || 'не указано'}
							defaultValue={factory.fullName || ''}
							className='w-[300px]'
						/>
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='fullNameCN' className='justify-self-end'>
							Китайское название поставщика:
						</label>
						<input
							name='fullNameCN'
							id='fullNameCN'
							placeholder={factory.fullNameCN || 'не указано'}
							defaultValue={factory.fullNameCN || ''}
						/>
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='province' className='justify-self-end'>
							Провинция
						</label>
						<select
							required
							name='province'
							id='province'
							defaultValue={factory.province}
						>
							{PROVINCE_LIST.map(province => (
								<option key={province} value={province}>
									{province}
								</option>
							))}
						</select>
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='city' className='justify-self-end'>
							Город:
						</label>
						<input
							required
							name='city'
							id='city'
							placeholder={factory.city || 'не указано'}
							defaultValue={factory.city || ''}
						/>
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='address' className='justify-self-end'>
							Район и точный адрес:
						</label>
						<input
							name='address'
							id='address'
							placeholder={factory.address || 'не указано'}
							defaultValue={factory.address || ''}
						/>
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='howToGetThere' className='justify-self-end'>
							Как добираться:
						</label>
						<textarea
							name='howToGetThere'
							id='howToGetThere'
							placeholder={factory.howToGetThere || 'не указано'}
							defaultValue={factory.howToGetThere || ''}
						/>
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<a
							target='_blank'
							href={factory.TPPLink || ''}
							className='justify-self-end '
						>
							Ссылка на ТПП:
						</a>
						<input
							type='link'
							name='TPPLink'
							id='TPPLink'
							defaultValue={factory.TPPLink || ''}
						/>
					</div>

					<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-400'>
						<label htmlFor='TN' className='justify-self-end'>
							Товарные направления:
						</label>
						<select name='TN' id='TN' required>
							<option value='haha'>haha</option>
						</select>
					</div>

					<EditFactoryButton />
				</form>
			</div>
		)
}
