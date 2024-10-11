'use client'

import { disconnectTNfromFactory } from 'actions/factoriesActions'
import Link from 'next/link'
import { useActionState } from 'react'
import { AiOutlineUserDelete } from 'react-icons/ai'

export default function DisconnectTNFromFactory({
	TN_name,
	TN_number,
	factory
}: {
	TN_name: string
	TN_number: number
	factory: string
}) {
	const [_, action, isPending] = useActionState(disconnectTNfromFactory, {
		TN_number,
		factory
	})

	return (
		<>
			<Link href={`/TN/${TN_number}`} className='pl-2'>
				{TN_name}
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
