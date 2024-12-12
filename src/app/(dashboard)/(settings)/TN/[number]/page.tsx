import DisconnectUser from '@/components/TN Components/DisconnectManager'
import { getTNWithManagerName, TN_WithManagerName } from 'actions/tnActions'
import { getAllUserNames } from 'actions/userActions'
import { redirect } from 'next/navigation'
import EditTNButtonsBlock from '@/components/TN Components/EditTNButtonsBlock'
import Factory from '@/components/Factories Components/Factory'
import Link from 'next/link'
import { FcPlus } from 'react-icons/fc'

export default async function IndividualTNPage({
	params
}: {
	params: { number: string }
}) {
	const { number } = await params
	const [TN, users]: [
		TN_WithManagerName | 'Request Failed',
		string[] | 'Request Failed'
	] = await Promise.all([
		getTNWithManagerName(Number(number)),
		getAllUserNames()
	])

	if (TN === 'Request Failed' || users === 'Request Failed') redirect('/TN/add')
	return (
		<>
			<form className='h-1/2 grid place-content-center gap-1'>
				<h3 className='text-3xl text-center mb-7 select-none hover:scale-105 hover:-rotate-1 hover:text-violet-500 transition'>
					{TN.name}
				</h3>

				<div className='grid grid-cols-[175px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-200'>
					<label htmlFor='name' className='justify-self-end'>
						Название направления:
					</label>
					<input id='name' name='name' defaultValue={TN.name}></input>
				</div>

				<div className='grid grid-cols-[175px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
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

				<div className='grid grid-cols-[175px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-400'>
					<label htmlFor='RTN' className='justify-self-end'>
						РТН:
					</label>
					<input id='RTN' defaultValue={TN.RTN} name='RTN'></input>
				</div>

				<div className='grid grid-cols-[175px_1fr]  gap-2 sm:gap-8 mb-2 hover:text-violet-500'>
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

				<div className='grid grid-cols-[175px_1fr] gap-2 sm:gap-8 mb-2 '>
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
				<div className='grid grid-cols-[175px_1fr] gap-2 sm:gap-8 mb-2 hover:text-violet-600'>
					<label htmlFor='manager' className='justify-self-end'>
						Добавить менеджера КП:
					</label>
					<select name='manager' id='manager'>
						<option value={''}>Выбери меня!</option>
						{users?.map(fullName => {
							return (
								<option key={fullName} value={fullName}>
									{fullName}
								</option>
							)
						})}
					</select>
				</div>
				<EditTNButtonsBlock number={Number(number)} />
			</form>
			<section className='mt-6 text-center'>
				<div className='flex justify-center gap-5'>
					<h1 className='text-2xl'>Поставщики Товарного Направления</h1>
					<Link
						href={'/factories/add'}
						className='grid place-items-center text-3xl'
					>
						<FcPlus />
					</Link>
				</div>
				<div className='grid'>
					<Factory />
				</div>
			</section>
		</>
	)
}
