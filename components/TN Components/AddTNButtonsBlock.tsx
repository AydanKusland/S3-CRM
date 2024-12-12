'use client'
import { createTN } from 'actions/tnActions'
import Link from 'next/link'
import { useActionState } from 'react'
export default function AddTNButtonsBlock() {
	const [state, action, isPending] = useActionState(createTN, null)

	return (
		<>
			<button
				type='submit'
				formAction={action}
				className='text-center min-w-full p-1.5 bg-lime-800 rounded uppercase tracking-wide hover:bg-lime-700 hover:text-violet-950 transition-all'
				disabled={isPending}
			>
				{isPending
					? 'Пытаюсь добавить, не отвлекай...'
					: 'Добавить товарное направление в базу данных'}
			</button>
			{typeof state === 'number' && (
				<Link
					href={`/TN/${state}`}
					className='block text-center text-lg mt-4 min-w-full p-1 bg-lime-600 rounded font-semibold uppercase tracking-wide hover:bg-lime-700 hover:text-violet-900 transition-all'
				>
					Сработало! Перейти в новый проект
				</Link>
			)}
			{typeof state === 'string' && (
				<p className='text-center mt-4 text-red-600 text-xl'>{state}</p>
			)}
		</>
	)
}
