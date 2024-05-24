'use client'

import { getAllInspectionsAction } from 'utils/actions'

function InspectionList() {
	const data = getAllInspectionsAction()

	const inspections = data?.inspections || []
	console.log(inspections)

	return <div>InspectionList</div>
}
export default InspectionList
