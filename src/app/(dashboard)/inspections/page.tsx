import InspectionCalendar from '@/components/InspectionCalendar'
import InspectionList from '@/components/InspectionList'

export default async function InspectionsPage() {
	return (
		<>
			<InspectionCalendar yearAndWeek='' />
			<InspectionList />
		</>
	)
}
