'use client'
import { editFactory } from 'actions/factoriesActions'
import { useActionState } from 'react'

export default function EditFactoryButton() {
	const [state, action, isPending] = useActionState(editFactory, '')

	return (
		<>
			<button
				type='submit'
				formAction={action}
				className='text-center min-w-full p-1.5 bg-lime-800 rounded uppercase tracking-wide hover:bg-lime-700 hover:text-violet-950 transition-all'
				disabled={isPending}
			>
				{isPending ? 'Работаю, не отвлекай...' : 'Изменить данные поставщика'}
			</button>
			{state === 'Произошла ошибка во время изменения данных поставщика!' ||
			state === '' ? (
				<p className='text-center mt-4 text-red-600 text-xl fade-out'>
					{state}
				</p>
			) : (
				<p className='block text-center mt-4 min-w-full p-1 rounded tracking-wide fade-out'>
					Данные поставщика изменены!
				</p>
			)}
		</>
	)
}
