import CreateInspection from '@/components/CreateInspection'
import InspectionCalendar from '@/components/InspectionCalendar'
import InspectionList from '@/components/InspectionList'

export default async function InspectionsPage() {
	return (
		<div className='h-screen'>
			<InspectionCalendar />
			<CreateInspection />
			<InspectionList />
			{/* Inspections related to your TN or having your name should be highlighted */}
		</div>
	)
}
