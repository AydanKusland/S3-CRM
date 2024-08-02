import CreateInspection from '@/components/CreateInspection'
import InspectionCalendar from '@/components/InspectionCalendar'
import InspectionList from '@/components/InspectionList'

async function page() {
	// prefetch all inspections

	return (
		<div>
			<InspectionCalendar />
			<CreateInspection />
			<InspectionList />
			{/* Inspections related to your TN or having your name should be highlighted */}
			{/* Every inspection without assigned date goes to the next week */}
		</div>
	)
}
export default page
