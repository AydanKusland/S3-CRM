'use client'

import { InspectionTypeWithId } from 'utils/types'
import useOptimizedDebounce from 'utils/useOptimizedDebounce'

export const CommentInput = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	const optimizedDebounce = useOptimizedDebounce(inspection)

	return (
		<input
			className='max-w-48 rounded-none'
			type='text'
			name='commentary'
			placeholder='комментарий'
			defaultValue={inspection?.commentary}
			autoComplete='on'
			onChange={optimizedDebounce}
		/>
	)
}
