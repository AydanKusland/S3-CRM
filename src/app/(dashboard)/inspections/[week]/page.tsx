import InspectionList from '@/components/Inspection Components/InspectionList'
import CreateInspection from '@/components/Inspection Components/CreateInspection'
import InspectionCalendar from '@/components/Inspection Components/InspectionCalendar'

export default function page({
	params: { week },
	children
}: {
	params: { week: string }
	children: React.ReactNode
}) {
	return (
		<>
			<InspectionCalendar yearAndWeek={week} />
			<CreateInspection />
			<InspectionList week={week} />
		</>
	)
}
