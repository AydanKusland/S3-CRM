'use client'

import { useFormStatus } from 'react-dom'
import { FcPlus } from 'react-icons/fc'

export default function SubmitButton() {
	const { pending } = useFormStatus()
	return (
		<button
			type='submit'
			disabled={pending}
			className='text-2xl hover:scale-105 hover:rotate-90 transition'
		>
			{pending ? 'Создаю инспекцию...' : <FcPlus />}
		</button>
	)
}
