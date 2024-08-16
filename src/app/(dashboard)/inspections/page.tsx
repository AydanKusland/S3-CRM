import CreateInspection from '@/components/CreateInspection'
import InspectionCalendar from '@/components/InspectionCalendar'
import InspectionList from '@/components/InspectionList'

export default async function InspectionsPage({ searchParams }) {
	return (
		<div className='h-screen'>
			<InspectionCalendar searchParams={searchParams} />
			<CreateInspection />
			<InspectionList />
			{/* Inspections related to your TN or having your name should be highlighted */}
		</div>
	)
}
