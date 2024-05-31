'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllInspectionsAction } from 'utils/actions'

function InspectionList() {
	const { data } = useQuery({
		queryKey: ['inspections'],
		queryFn: () => getAllInspectionsAction()
	})

	const inspections = data?.inspections || []
	// console.log(inspections)

	return <div>InspectionList</div>
}
export default InspectionList
