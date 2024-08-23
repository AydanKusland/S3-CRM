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
		<div className='max-w-fit mx-auto mt-2'>
			{provinceList.map((province: string) => {
				return (
					<div
						key={province}
						className='ml-4 mx-auto grid uppercase mb-2'
						// onClick={e => hideProvince(e)}
					>
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
