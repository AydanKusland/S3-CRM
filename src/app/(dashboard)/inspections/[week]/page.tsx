import InspectionList from '@/components/Inspection Components/InspectionList'
import CreateInspection from '@/components/Inspection Components/CreateInspection'
import InspectionCalendar from '@/components/Inspection Components/InspectionCalendar'

export default async function page({
	params,
	children
}: {
	params: { week: string }
	children: React.ReactNode
}) {
	const { week } = await params
	return (
		<>
			<InspectionCalendar yearAndWeek={week} />
			<CreateInspection />
			<InspectionList week={week} />
		</>
	)
}
