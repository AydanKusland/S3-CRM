import CreateInspection from '@/components/CreateInspection'
import InspectionCalendar from '@/components/InspectionCalendar'
import InspectionList from '@/components/InspectionList'

function page() {
	// load all inspections

	return (
		<div className=''>
			<InspectionCalendar />
			<CreateInspection />
			<InspectionList />
			{/* Inspections related to your TN or having your name should be highlighted */}
			{/* Every inspection without assigned date goes to the next week */}
		</div>
	)
}
export default page
