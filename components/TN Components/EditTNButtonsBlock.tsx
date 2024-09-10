'use client'
import { editTNAction } from 'actions/tnActions'
import { useActionState } from 'react'
export default function AddTNButtonsBlock({ number }: { number: number }) {
	const [state, action, isPending] = useActionState(editTNAction, number)

	return (
		<>
			<button
				type='submit'
				formAction={action}
				className='mt-2 text-center min-w-full p-1.5 bg-lime-800 rounded uppercase tracking-wide hover:bg-lime-700 hover:text-violet-950 transition-all'
				disabled={isPending}
			>
				{isPending
					? 'Пытаюсь добавить, не отвлекай...'
					: 'Изменить товарное направление'}
			</button>
			{state === 400 && (
				<p className='text-center mt-4 text-red-600 text-xl'>
					"Не получилось изменить ТН"
				</p>
			)}
		</>
	)
}
