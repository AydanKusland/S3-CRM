'use client'

import { debounce } from '@/utils/helpers'
import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'
import { InspectionTypeWithId } from 'utils/types'

export const TovarnoeNapravlenieInput = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	return (
		<select
			name='TN'
			className='rounded-none pl-1 text-sm'
			defaultValue={inspection?.TN}
			required
			onChange={debounce(inspection)}
		>
			{/* {TN?.map(TN => (
		 		<option key={TN.number} value={TN.name}>
		 			{TN.name}
		 		</option>
		 	))} */}
			{tovarnieNapravlenia.map(TN => (
				<option key={TN} value={TN}>
					{TN}
				</option>
			))}
		</select>
	)
}
