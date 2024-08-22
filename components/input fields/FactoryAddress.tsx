'use client'

import { InspectionTypeWithId } from 'utils/types'
import useOptimizedDebounce from 'utils/useOptimizedDebounce'

export const FactoryAddress = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	const optimizedDebounce = useOptimizedDebounce(inspection)

	return (
		<input
			required
			className='rounded-none max-w-32'
			type='text'
			name='factoryAddress'
			defaultValue={inspection?.factoryAddress}
			placeholder='Город, вокзал'
			onChange={optimizedDebounce}
		/>
	)
}
