'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllInspectionsAction } from 'utils/actions'
import { Inspection } from './Inspection'
import {
	makeProvinceList,
	sortInspectionsByExecutorAndDate
} from 'utils/helpers'

export default function InspectionList() {
	const { data } = useQuery({
		queryKey: ['inspections'],
		queryFn: () => getAllInspectionsAction()
	})

	if (data?.inspections) {
		const provinceList = makeProvinceList(data.inspections)
		const inspections = sortInspectionsByExecutorAndDate(data.inspections)

		return (
			<div className='p-3'>
				{provinceList.map((province: string) => {
					return (
						<div key={province} className='grid uppercase mb-2'>
							<h3 className='text-center mb-2'>{province}</h3>
							<div>
								{inspections.map(inspection => {
									if (inspection.province === province)
										return (
											<Inspection key={inspection.id} inspection={inspection} />
										)
								})}
							</div>
						</div>
					)
				})}
			</div>
		)
	} else return <h1>HUI</h1>
}
