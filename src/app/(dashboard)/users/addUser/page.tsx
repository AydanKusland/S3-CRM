'use client'

import { createUser } from 'actions/userActions'
import Link from 'next/link'
import { useActionState } from 'react'

export default function AddUserPage() {
	const [status, action, isPending] = useActionState(createUser, {
		status: '',
		fullName: ''
	})

	return (
		<form action={action} className='grid h-full place-content-center'>
			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-200'>
				<label htmlFor='fullName' className='justify-self-end'>
					{'Фамилия и имя:'}
				</label>
				<input type='text' name='fullName' id='fullName' />
			</div>
			<div className='grid grid-cols-2  gap-2 sm:gap-8 mb-2 hover:text-violet-300'>
				<label htmlFor='email' className='justify-self-end'>
					{'Почтовый адрес:'}
				</label>
				<input type='text' name='email' id='email' />
			</div>
			<button
				disabled={isPending}
				className='block mt-6 text-center hover:translate-y-2 hover:scale-95 hover:text-red-500 transition'
			>
				{'Добавить пользователя'}
			</button>
			{status.status === 'success!' && (
				<>
					<p className='text-center text-xl text-green-500 mt-4 transition-all'>
						{'Новый пользователь успешно создан!'}
					</p>
					<Link
						href={`${status.fullName}`}
						className='mt-3 text-center text-green-600 text-lg'
					>
						{`Навестить страничку ${status.fullName}`}
					</Link>
				</>
			)}
		</form>
	)
}
