'use client'
import { createFactory } from 'actions/factoriesActions'
import Link from 'next/link'
import { useActionState } from 'react'

export default function AddFactoryButton() {
	const [state, action, isPending] = useActionState(createFactory, '')

	return (
		<>
			<button
				type='submit'
				formAction={action}
				className='text-center min-w-full p-1.5 bg-lime-800 rounded uppercase tracking-wide hover:bg-lime-700 hover:text-violet-950 transition-all'
				disabled={isPending}
			>
				{isPending
					? 'Пытаюсь создать, не отвлекай...'
					: 'Добавить поставщика в базу данных'}
			</button>
			{state === 'Произошла ошибка во время создания поставщика!' ||
			state === '' ? (
				<p className='text-center mt-4 text-red-600 text-xl'>{state}</p>
			) : (
				<Link
					href={`/factories/${state}`}
					className='block text-center text-lg mt-4 min-w-full p-1 bg-lime-600 rounded font-semibold uppercase tracking-wide hover:bg-lime-700 hover:text-violet-900 transition-all'
				>
					Сработало! Перейти на страницу нового поставщика!
				</Link>
			)}
		</>
	)
}
