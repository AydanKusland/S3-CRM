import { Inspection } from './Inspection'
import {
	getInspections,
	makeProvinceList,
	sortInspectionsByExecutorAndDate
} from 'utils/helpers'
import { InspectionTypeWithId } from 'utils/types'

export default async function InspectionList({ week }: { week?: string }) {
	let inspections: InspectionTypeWithId[] = await getInspections(week)

	const provinceList = makeProvinceList(inspections)
	inspections = sortInspectionsByExecutorAndDate(inspections)

	const hideProvince = (e: React.MouseEvent<HTMLElement>) => {
		// e.target.style.display = 'none'
	}

	return (
		<div className='md:px-4'>
			{provinceList.map((province: string) => {
				return (
					<div
						key={province}
						// onClick={e => hideProvince(e)}
					>
						<h3 className='text-center uppercase my-3'>{province}</h3>
						<div className=''>
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
