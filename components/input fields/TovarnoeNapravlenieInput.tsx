'use client'

import { debounce } from '@/utils/helpers'
import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'
import { InspectionTypeWithId } from 'utils/types'

export const TovarnoeNapravlenieInput = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	// const [TN, setTN] = useState<TN[] | null>(null)

	// useEffect(() => {
	// 	async function getTN(fullName: string) {
	// 		const TN = await getUserTN(fullName)
	// 		setTN(TN)
	// 	}
	// 	getTN('Тугов Сергей')
	// }, [])

	return (
		<select
			name='TN'
			className='max-w-40 rounded-none pl-1 text-sm'
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
