import CreateInspection from '@/components/CreateInspection'
import InspectionCalendar from '@/components/InspectionCalendar'
import InspectionList from '@/components/InspectionList'
import {
	HydrationBoundary,
	QueryClient,
	dehydrate
} from '@tanstack/react-query'
import { getAllInspectionsAction } from 'utils/actions'

async function page() {
	// prefetch all inspections
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ['inspections'],
		queryFn: () => getAllInspectionsAction()
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div>
				<InspectionCalendar />
				<CreateInspection />
				<InspectionList />
				{/* Inspections related to your TN or having your name should be highlighted */}
				{/* Every inspection without assigned date goes to the next week */}
			</div>
		</HydrationBoundary>
	)
}
export default page
