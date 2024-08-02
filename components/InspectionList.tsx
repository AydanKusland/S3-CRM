'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllInspectionsAction } from 'utils/actions'
import { Inspection } from './Inspection'

function InspectionList() {
	const { data } = useQuery({
		queryKey: ['inspections'],
		queryFn: () => getAllInspectionsAction()
	})

	const inspections = data?.inspections || []
	type provinceList = string[]
	const provinceList = Array.from(
		new Set(
			inspections.reduce((acc: string[], cur) => [...acc, cur.province], [])
		)
	)

	return (
		<div className='p-3'>
			{provinceList.map((province: string) => {
				return (
					<div key={province} className='border-2 grid'>
						<h3 className='text-center'>{province}</h3>
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
