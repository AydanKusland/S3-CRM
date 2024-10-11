import DisconnectTNFromFactory from '@/components/Factories Components/DisconnectTNFromFactory'
import EditFactoryButton from '@/components/Factories Components/EditFactoryButton'
import { PROVINCE_LIST } from '@/utils/CONSTANTS'
import { getFactory } from 'actions/factoriesActions'
import { getUserTN } from 'actions/tnActions'

export default async function FactoryPage({
	params: { name }
}: {
	params: { name: string }
}) {
	const factory = await getFactory(name)
	// Поменять на текущего юзера и сделать рэйс из промисов
	const TN = await getUserTN('Тугов Сергей')
	if (factory !== 'Не удалось загрузить завод')
		return (
			<div className='h-full grid place-content-center text-center'>
				<h1 className='text-2xl mb-6 hover:text-my-darkGreen transition cursor-pointer'>
					{factory.name}
				</h1>
				<form className='grid h-full place-content-center drop-shadow-lg text-center gap-1 min-w-[600px]'>
					<div className='w-[600px] grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='name'>Краткое название поставщика:</label>
						<input required name='name' id='name' defaultValue={factory.name} />
					</div>
					<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='fullName'>Полное название поставщика:</label>
						<input
							name='fullName'
							id='fullName'
							placeholder={factory.fullName || 'не указано'}
							defaultValue={factory.fullName || ''}
						/>
					</div>
					<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='fullNameCN'>Китайское название поставщика:</label>
						<input
							name='fullNameCN'
							id='fullNameCN'
							placeholder={factory.fullNameCN || 'не указано'}
							defaultValue={factory.fullNameCN || ''}
						/>
					</div>
					<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='province'>Провинция</label>
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
					<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='city'>Город:</label>
						<input
							required
							name='city'
							id='city'
							placeholder={factory.city || 'не указано'}
							defaultValue={factory.city || ''}
						/>
					</div>
					<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='address'>Район и точный адрес:</label>
						<input
							name='address'
							id='address'
							placeholder={factory.address || 'не указано'}
							defaultValue={factory.address || ''}
						/>
					</div>
					<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='howToGetThere'>Как добираться:</label>
						<textarea
							name='howToGetThere'
							id='howToGetThere'
							placeholder={factory.howToGetThere || 'не указано'}
							defaultValue={factory.howToGetThere || ''}
							className='min-h-16'
						/>
					</div>
					<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<a target='_blank' href={factory.TPPLink || ''}>
							Ссылка на ТПП:
						</a>
						<input
							type='link'
							name='TPPLink'
							id='TPPLink'
							defaultValue={factory.TPPLink || ''}
						/>
					</div>

					<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 '>
						<label className='hover:text-violet-600'>
							Товарные направления:
						</label>
						<div className='flex gap-2 justify-center bg-my-brown rounded p-[3px]'>
							{factory.TN.map(({ name, number }) => (
								<DisconnectTNFromFactory
									key={name}
									TN_name={name}
									TN_number={number}
									factory={factory.name}
								/>
							))}
						</div>
					</div>
					{/* Добавить ТН */}
					{TN !== 'Не удалось получить ТН' && (
						<div className='grid grid-cols-[230px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-600'>
							<label htmlFor='TN'>Добавить ТН:</label>
							<select name='TN' id='TN' defaultValue=''>
								<option value=''>Выберите ТН</option>
								{TN.map(({ name }) => (
									<option key={name} value={name}>
										{name}
									</option>
								))}
							</select>
						</div>
					)}

					<EditFactoryButton />
				</form>
			</div>
		)
}
