import InspectionList from '@/components/InspectionList'
import CreateInspection from '@/components/CreateInspection'
import InspectionCalendar from '@/components/InspectionCalendar'

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
