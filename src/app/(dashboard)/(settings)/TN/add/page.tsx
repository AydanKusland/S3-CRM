import AddTNButtonsBlock from '@/components/TN Components/AddTNButtonsBlock'
import { getAllUserNames } from 'actions/userActions'

export default async function AddTNPage() {
	const users: string[] | 'Request Failed' = await getAllUserNames()

	if (users !== 'Request Failed')
		return (
			<form className='grid h-full place-content-center drop-shadow-lg text-center gap-1'>
				<p className='mb-6 text-xl hover:text-my-darkGreen transition cursor-pointer'>
					Добавить товарное направление
				</p>
				<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
					<label htmlFor='number' className='justify-self-end cursor-pointer'>
						Номер товарного направления
					</label>
					<input
						required
						type='number'
						name='number'
						id='number'
						max={1000}
						min={1}
						placeholder='0-1000'
					/>
				</div>
				<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-400'>
					<label htmlFor='name' className='justify-self-end cursor-pointer'>
						Название товарного направления
					</label>
					<input
						type='text'
						name='name'
						id='name'
						required
						defaultValue={'Название направления'}
					/>
				</div>
				<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-500'>
					<label htmlFor='RTN' className='justify-self-end cursor-pointer'>
						РТН
					</label>
					<input
						type='text'
						name='RTN'
						id='RTN'
						required
						defaultValue='Голубцов Александр'
					/>
				</div>
				<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-600'>
					<label
						htmlFor='reportEngineer'
						className='justify-self-end cursor-pointer'
					>
						Инженер ЦО
					</label>
					<input
						type='text'
						name='reportEngineer'
						id='reportEngineer'
						required
						defaultValue={'Сорокин Денис'}
					/>
				</div>
				<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-700'>
					<label htmlFor='manager' className='justify-self-end cursor-pointer'>
						Менеджер КП
					</label>
					<select name='manager' id='manager'>
						{users.map((fullName: string) => {
							return (
								<option key={fullName} value={fullName}>
									{fullName}
								</option>
							)
						})}
					</select>
				</div>
				<AddTNButtonsBlock />
			</form>
		)
}
