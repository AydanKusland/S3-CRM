'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllInspectionsAction } from 'utils/actions'
import { Inspection } from './Inspection'
import { InspectionType } from 'utils/types'

function InspectionList() {
	const { data } = useQuery({
		queryKey: ['inspections'],
		queryFn: () => getAllInspectionsAction()
	})

	const inspections =
		data?.inspections.sort((a: InspectionType, b: InspectionType) =>
			a.recommendedExecutor.localeCompare(b.recommendedExecutor)
		) || []
	const provinceList = Array.from(
		new Set(
			inspections.reduce((acc: string[], cur) => [...acc, cur.province], [])
		)
	)

	return (
		<div className='p-3 border-2'>
			{provinceList.map((province: string) => {
				return (
					<div key={province} className='grid uppercase mb-4'>
						<h3 className='text-center mb-2'>{province}</h3>
						{inspections.map(inspection => {
							if (inspection.province === province)
								return (
									<Inspection key={inspection.id} inspection={inspection} />
								)
						})}
					</div>
				)
			})}
		</div>
	)
}
export default InspectionList
