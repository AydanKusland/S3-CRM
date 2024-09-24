import { PROVINCE_LIST } from '@/utils/CONSTANTS'
import { getFactory } from 'actions/factoriesActions'

export default async function FactoryPage({
	params: { name }
}: {
	params: { name: string }
}) {
	const factory = await getFactory(name)
	const TN: string[] = []
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
						<input required name='name' id='name' />
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='fullName' className='justify-self-end'>
							Полное название поставщика:
						</label>
						<input name='fullName' id='fullName' />
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='fullNameCN' className='justify-self-end'>
							Китайское название поставщика:
						</label>
						<input name='fullNameCN' id='fullNameCN' />
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='province' className='justify-self-end'>
							Провинция
						</label>
						<select required name='province' id='province'>
							{PROVINCE_LIST.map(province => (
								<option key={province} value='province'>
									{province}
								</option>
							))}
						</select>
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='city' className='justify-self-end'>
							Город:
						</label>
						<input required name='city' id='city' />
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='address' className='justify-self-end'>
							Район и точный адрес:
						</label>
						<input name='address' id='address' />
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='address' className='justify-self-end'>
							Ближайшая Ж/Д станция:
						</label>
						<input name='address' id='address' />
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='TPPLink' className='justify-self-end'>
							Ссылка на ТПП:
						</label>
						<input type='link' name='TPPLink' id='TPPLink' />
					</div>

					<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-400'>
						<label htmlFor='TN' className='justify-self-end'>
							Товарные направления:
						</label>
						<select name='TN' id='TN' required>
							<option value='haha'>haha</option>
						</select>
					</div>

					{/* <AddTNButtonsBlock /> */}
				</form>
			</div>
		)
}
