import AddFactoryButton from '@/components/Factories Components/AddFactoryButton'
import { PROVINCE_LIST } from '@/utils/CONSTANTS'
import { getUserTN, UserTN_Names } from 'actions/tnActions'

export default async function AddFactoryPage() {
	const TN: UserTN_Names | 'Не удалось получить ТН' = await getUserTN(
		'Тугов Сергей'
	)
	if (TN !== 'Не удалось получить ТН')
		return (
			<div className='h-full grid place-content-center text-center'>
				<h1 className='text-2xl mb-6 hover:text-my-darkGreen transition cursor-pointer'>
					Новый Поставщик
				</h1>
				<form className='grid h-full place-content-center drop-shadow-lg text-center gap-1'>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='name' className='justify-self-end cursor-pointer'>
							Краткое название поставщика:
						</label>
						<input required name='name' id='name' />
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label
							htmlFor='province'
							className='justify-self-end cursor-pointer'
						>
							Провинция
						</label>
						<select required name='province' id='province'>
							{PROVINCE_LIST.map(province => (
								<option key={province} value={province}>
									{province}
								</option>
							))}
						</select>
					</div>
					<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
						<label htmlFor='city' className='justify-self-end cursor-pointer'>
							Город:
						</label>
						<input required name='city' id='city' />
					</div>

					<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-6 hover:text-violet-400'>
						<label htmlFor='TN' className='justify-self-end cursor-pointer'>
							Товарные направления:
						</label>
						<select name='TN' id='TN' required>
							{TN.map(({ name }: { name: string }) => (
								<option key={name} value={name}>
									{name}
								</option>
							))}
							<option value='haha'>haha</option>
						</select>
					</div>
					<AddFactoryButton />
				</form>
			</div>
		)
}
