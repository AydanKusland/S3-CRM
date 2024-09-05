import DisconnectUser from '@/components/TNComponents/DisconnectManager'
import {
	editTNAction,
	getTNWithManagerName,
	TN_WithManagerName
} from 'actions/tnActions'
import { getAllUserNames } from 'actions/userActions'
import { redirect } from 'next/navigation'

export default async function IndividualTNPage({
	params: { number }
}: {
	params: { number: string }
}) {
	const [TN, users]: [
		TN_WithManagerName | 'Request Failed',
		string[] | 'Request Failed'
	] = await Promise.all([
		getTNWithManagerName(Number(number)),
		getAllUserNames()
	])

	const editTNActionWithId = editTNAction.bind(null, Number(number))

	if (TN === 'Request Failed' || users === 'Request Failed')
		redirect('/settings/TN/add')
	return (
		<form
			action={editTNActionWithId}
			className='text-center mx-auto max-w-screen-sm'
		>
			<h3 className='m-8 text-xl select-none hover:scale-105 hover:-rotate-1 hover:text-violet-500 transition'>
				{TN.name}
			</h3>

			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-200'>
				<label htmlFor='name' className='justify-self-end'>
					Название направления:
				</label>
				<input id='name' name='name' defaultValue={TN.name}></input>
			</div>

			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
				<label htmlFor='number' className='justify-self-end'>
					Номер направления:
				</label>
				<input
					id='number'
					type='number'
					name='number'
					defaultValue={TN.number}
				></input>
			</div>

			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-400'>
				<label htmlFor='RTN' className='justify-self-end'>
					РТН:
				</label>
				<input id='RTN' defaultValue={TN.RTN} name='RTN'></input>
			</div>

			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-500'>
				<label htmlFor='reportEngineer' className='justify-self-end'>
					Инженер ЦО:
				</label>
				<input
					id='reportEngineer'
					defaultValue={TN.reportEngineer}
					name='reportEngineer'
				></input>
			</div>
			{/* Текущие менеджеры с возможностью удалить */}

			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 '>
				<label className='justify-self-end hover:text-violet-600'>
					Текущие менеджеры КП:
				</label>
				<div className='flex gap-2 justify-center bg-my-brown rounded p-[3px]'>
					{TN.manager.map(({ fullName }: { fullName: string }) => (
						<DisconnectUser
							key={fullName}
							fullName={fullName}
							number={TN.number}
						/>
					))}
				</div>
			</div>
			{/* Добавить менеджера */}
			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-600'>
				<label htmlFor='manager' className='justify-self-end'>
					Добавить менеджера КП:
				</label>
				<select name='manager' id='manager'>
					{users?.map(fullName => {
						return (
							<option key={fullName} value={fullName}>
								{fullName}
							</option>
						)
					})}
				</select>
			</div>

			<button
				type='submit'
				className='hover:text-violet-700 hover:scale-95 transition-all mt-6 text-lg'
			>
				Изменить всё к чертям!
			</button>
		</form>
	)
}
