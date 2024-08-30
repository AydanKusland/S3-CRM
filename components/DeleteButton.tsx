'use client'

import { useActionState } from 'react'
import { GoTrash } from 'react-icons/go'
import { deleteInspectionAction } from 'actions/inspectionActions'

export default function DeleteButton({ id }: { id: string }) {
	const [_, action, isPending] = useActionState(deleteInspectionAction, 0)

	return (
		<button
			className={`ml-1 transition-all ${
				isPending
					? 'text-gray-600'
					: 'text-red-600 hover:text-red-300 hover:text-xl'
			}`}
			onClick={() => action(id)}
			disabled={isPending}
		>
			{isPending ? '...' : <GoTrash />}
		</button>
	)
}
