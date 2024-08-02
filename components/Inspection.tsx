import DateRangePickerComponent from './ui/DateRangePicker'
import { InspectionType } from 'utils/types'

export const Inspection = ({ inspection }: InspectionType) => {
	return (
		<div key={inspection.id} className='mx-auto flex'>
			{/* Даты */}
			<DateRangePickerComponent inspectionDate={inspection.date} />
			<p>{`${inspection.tovarnoeNapravlenie} ${inspection.factoryShortName}`}</p>
		</div>
	)
}
