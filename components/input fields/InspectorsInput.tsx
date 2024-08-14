'use client'

import { InspectionTypeWithId } from 'utils/types'
import useOptimizedDebounce from 'utils/useOptimizedDebounce'

const inspectors = [
	'Любой',
	'Любой инженер',
	'Пронин',
	'Волколупов',
	'Соловьёв',
	'Круть',
	'Оу',
	'Холмов'
]

export const InspectorsInput = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	const optimizedDebounce = useOptimizedDebounce(inspection)
	return (
		<>
			<input
				required
				className='rounded-l-none max-w-40'
				list='recommendedExecutors'
				name='recommendedExecutor'
				autoComplete='on'
				placeholder='исполнитель'
				defaultValue={inspection?.recommendedExecutor}
				onChange={optimizedDebounce}
			/>
			<datalist id='recommendedExecutors'>
				{inspectors.map(option => (
					<option key={option} value={option} />
				))}
			</datalist>
		</>
	)
}
