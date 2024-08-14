import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'
import { InspectionTypeWithId } from 'utils/types'
import useOptimizedDebounce from 'utils/useOptimizedDebounce'

export const TovarnoeNapravlenieInput = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	const optimizedDebounce = inspection && useOptimizedDebounce(inspection)
	return (
		<select
			name='tovarnoeNapravlenie'
			className='max-w-40 rounded-none pl-1 text-sm'
			defaultValue={inspection?.tovarnoeNapravlenie}
			required
			onChange={optimizedDebounce}
		>
			{tovarnieNapravlenia.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	)
}
