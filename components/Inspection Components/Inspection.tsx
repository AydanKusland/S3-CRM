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
		<form>
			<div
				key={inspection.id}
				className='relative grid grid-cols-2 md:grid-cols-4 xl:grid-flow-col md:gap-y-3 max-w-[1940px] mx-auto  text-sm'
			>
				{/* Даты */}
				<DateRangePickerComponent
					inspectionDate={[startDate, endDate]}
					id={inspection.id}
				/>
				<MainForm inspection={inspection} />
				<DeleteButton id={inspection.id} />
			</div>
		</form>
	)
}
