'use client'

import { disconnectManagerFromTN } from 'actions/tnActions'
import Link from 'next/link'
import { useActionState } from 'react'
import { AiOutlineUserDelete } from 'react-icons/ai'

type DisconnectManagerObject = {
	fullName: string
	number: number
}

export default function DisconnectManager({
	fullName,
	number
}: DisconnectManagerObject) {
	const [_, action, isPending] = useActionState(disconnectManagerFromTN, {
		fullName,
		number
	})

	return (
		<>
			<Link href={`/users/${fullName}`} className='pl-2'>
				{fullName}
			</Link>
			<button
				className={`transition-all pr-1 text-red-600 hover:text-red-300 hover:text-xl`}
				formAction={action}
				disabled={isPending}
			>
				{isPending ? '...' : <AiOutlineUserDelete />}
			</button>
		</>
	)
}
