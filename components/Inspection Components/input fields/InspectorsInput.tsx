'use client'

import { debounce } from '@/utils/helpers'
import { InspectionTypeWithId } from 'utils/types'

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
	return (
		<>
			<input
				required
				className='grow rounded-l-none'
				list='recommendedExecutors'
				name='recommendedExecutor'
				autoComplete='on'
				placeholder='исполнитель'
				defaultValue={inspection?.recommendedExecutor}
				onChange={debounce(inspection)}
			/>
			<datalist id='recommendedExecutors'>
				{inspectors.map(option => (
					<option key={option} value={option} />
				))}
			</datalist>
		</>
	)
}
