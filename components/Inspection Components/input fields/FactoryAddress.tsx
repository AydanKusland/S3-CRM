'use client'

import { debounce } from '@/utils/helpers'
import { InspectionTypeWithId } from 'utils/types'

export const FactoryAddress = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	return (
		<input
			required
			className='rounded-none'
			type='text'
			name='factoryAddress'
			placeholder='Город, вокзал'
			defaultValue={inspection?.factoryAddress}
			onChange={debounce(inspection)}
		/>
	)
}
