'use client'

import { debounce } from '@/utils/helpers'
import { InspectionTypeWithId } from 'utils/types'

const factories = ['Xianxing', 'UTL', 'Huajia']

export const FactoryNameInput = ({
	inspection,
	inspectionType
}: {
	inspection?: InspectionTypeWithId
	inspectionType?: string
}) => {
	if (inspectionType) {
		return (
			<select
				name='factoryShortName'
				className='rounded-none w-36'
				defaultValue={inspection?.factoryShortName}
				onChange={debounce(inspection)}
			>
				{factories.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		)
	} else
		return (
			<input
				required
				name='factoryShortName'
				className='rounded-none max-w-36'
				defaultValue={inspection?.factoryShortName}
				placeholder='Название завода'
				onChange={debounce(inspection)}
			/>
		)
}
