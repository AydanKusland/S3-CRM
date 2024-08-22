'use client'

import { useActionState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { deleteInspectionAction } from 'utils/actions'

export default function DeleteButton({ id }: { id: string }) {
	const [error, action, isPending] = useActionState(deleteInspectionAction, 0)

	return (
		<button
			className={`text-2xl ${isPending ? 'text-gray-600' : 'text-red-600'}`}
			onClick={() => action(id)}
			disabled={isPending}
			// formAction={() => formAction(id)}
		>
			{isPending ? '...' : <TiDelete />}
		</button>
	)
}
