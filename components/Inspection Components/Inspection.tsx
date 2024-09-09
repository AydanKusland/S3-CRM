import DateRangePickerComponent from '../ui/DateRangePicker'
import { InspectionTypeWithId } from 'utils/types'
import { MainForm } from './forms/MainForm'
import { parseDateStringFromDDMMYYToDateStringMMDDYY } from 'utils/helpers'
import DeleteButton from './DeleteButton'

export const Inspection = ({
	inspection
}: {
	inspection: InspectionTypeWithId
}) => {
	const [startDate, endDate] = [
		parseDateStringFromDDMMYYToDateStringMMDDYY(inspection.startDate),
		parseDateStringFromDDMMYYToDateStringMMDDYY(inspection.endDate)
	]

	return (
		<article
			key={inspection.id}
			className='relative grid mx-auto text-sm grid-cols-3 md:grid-cols-5 lg:grid-cols-5 lg:gap-y-px lg:max-w-[1940px] xl:grid-flow-col-dense mb-2 '
		>
			{/* Даты */}
			<DateRangePickerComponent
				inspectionDate={[startDate, endDate]}
				id={inspection.id}
			/>
			<MainForm inspection={inspection} />
			<DeleteButton id={inspection.id} />
		</article>
	)
}
