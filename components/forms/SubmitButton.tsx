'use client'

import { useFormStatus } from 'react-dom'
import { FcPlus } from 'react-icons/fc'

export default function SubmitButton() {
	const { pending } = useFormStatus()
	return (
		<button type='submit' disabled={pending} className='ml-1 text-2xl'>
			<FcPlus />
		</button>
	)
}
