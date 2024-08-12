import CreateInspection from '@/components/CreateInspection'
import InspectionCalendar from '@/components/InspectionCalendar'
import InspectionList from '@/components/InspectionList'
import { QueryClient } from '@tanstack/react-query'
import { getAllInspectionsAction } from 'utils/actions'

export default async function InspectionsPage() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['inspections'],
		queryFn: () => getAllInspectionsAction()
	})

	return (
		<div className='h-screen'>
			<InspectionCalendar />
			<CreateInspection />
			<InspectionList />
			{/* Inspections related to your TN or having your name should be highlighted */}
		</div>
	)
}
