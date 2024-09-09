'use client'

import { useActionState } from 'react'
import { GoTrash } from 'react-icons/go'
import { deleteInspectionAction } from 'actions/inspectionActions'

export default function DeleteButton({ id }: { id: string }) {
	const [_, action, isPending] = useActionState(deleteInspectionAction, 0)

	return (
		<button
			className={`absolute right-px -translate-y-1/2 bottom-0 transition-all ${
				isPending
					? 'text-gray-600'
					: 'text-red-600 hover:text-red-300 hover:text-lg'
			}`}
			onClick={() => action(id)}
			disabled={isPending}
		>
			{isPending ? '...' : <GoTrash />}
		</button>
	)
}
