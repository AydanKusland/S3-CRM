'use client'
import { deleteUser } from 'actions/userActions'
import { useRouter } from 'next/navigation'
import { useActionState } from 'react'

export default function DeleteUserButton({ fullName }: { fullName: string }) {
	const [state, action, isPending] = useActionState(deleteUser, fullName)
	const router = useRouter()
	if (state === 'Пользователь удалён!') {
		setTimeout(() => router.push('/users'), 2000)
	}

	return (
		<form action={action} className='grid'>
			<button
				type='submit'
				className='text-center w-full mx-auto p-1.5 bg-cyan-600 rounded-b uppercase tracking-wide hover:bg-cyan-700 hover:text-violet-800 transition-all'
				disabled={isPending}
			>
				{isPending ? 'Пытаюсь удалить, не отвлекай...' : 'Удалить пользователя'}
			</button>
			{state === 'Удаление пользователя провалилось!' && (
				<p className='text-center mt-4 text-red-600 text-xl'>{state}</p>
			)}
			{state === 'Пользователь удалён!' && (
				<p className='text-center mt-4 text-red-600 text-xl'>{state}</p>
			)}
		</form>
	)
}
