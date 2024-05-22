import CreateInspection from '@/components/CreateInspection'
import InspectionCalendar from '@/components/InspectionCalendar'

function page() {
	// load all inspections

	return (
		<div className=''>
			<InspectionCalendar />
			<CreateInspection />
			<div>HERE WILL BE ALL INSPECTIONS!</div>
			{/* Inspections related to your TN or having your name should be highlighted */}
			{/* Every inspection without assigned date goes to the next week */}
		</div>
	)
}
export default page
