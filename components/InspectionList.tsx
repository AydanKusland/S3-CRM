import { getInspections } from 'utils/actions'
import { Inspection } from './Inspection'
import {
	makeProvinceList,
	sortInspectionsByExecutorAndDate
} from 'utils/helpers'
import { InspectionTypeWithId } from 'utils/types'

export default async function InspectionList() {
	let inspections: InspectionTypeWithId[] = await getInspections()

	const provinceList = makeProvinceList(inspections)
	inspections = sortInspectionsByExecutorAndDate(inspections)

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
}

// const { data, isLoading } = useQuery({
// 	queryKey: ['inspections'],
// 	queryFn: () => getAllInspectionsAction()
// })

// if (isLoading) return <h1>INSPECTION LIST IS LOADING</h1>

// if (data?.inspections) {
// 	const provinceList = makeProvinceList(data.inspections)
// 	const inspections = sortInspectionsByExecutorAndDate(data.inspections)
