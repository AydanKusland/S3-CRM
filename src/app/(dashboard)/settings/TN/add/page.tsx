'use client'

import { createTN } from 'actions/tnActions'
import Link from 'next/link'
import { useActionState } from 'react'

function page() {
	const [state, action, isPending] = useActionState(createTN, null)

	return (
		<form action={action} className='max-w-fit drop-shadow-lg mx-auto mt-20'>
			<div className='grid grid-cols-2 gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
				<label htmlFor='number' className='justify-self-end'>
					Номер товарного направления
				</label>
				<input
					required
					type='number'
					name='number'
					id='number'
					placeholder='0-150'
				/>
			</div>
			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-400'>
				<label htmlFor='name' className='justify-self-end'>
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
				<label htmlFor='RTN' className='justify-self-end'>
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
				<label htmlFor='reportEngineer' className='justify-self-end'>
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
			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-4 hover:text-violet-700'>
				<label htmlFor='manager' className='justify-self-end'>
					Менеджер КП
				</label>
				<input
					type='text'
					name='manager'
					id='manager'
					required
					defaultValue={'Тугов Сергей'}
				/>
			</div>
			<button
				type='submit'
				className='text-center min-w-full p-1.5 bg-lime-600 rounded uppercase tracking-wide hover:bg-lime-700 hover:text-violet-800 transition-all'
				disabled={isPending}
			>
				{isPending
					? 'Пытаюсь добавить, не отвлекай...'
					: 'Добавить товарное направление в базу данных'}
			</button>
			{typeof state === 'number' && (
				<Link
					href={`/settings/TN/${state}`}
					className='block text-center text-lg mt-4 min-w-full p-1 bg-lime-600 rounded font-semibold uppercase tracking-wide hover:bg-lime-700 hover:text-violet-900 transition-all'
				>
					Сработало! Перейти в новый проект
				</Link>
			)}
			{typeof state === 'string' && (
				<p className='text-center mt-4 text-red-600 text-xl'>{state}</p>
			)}
		</form>
	)
}

export default page
