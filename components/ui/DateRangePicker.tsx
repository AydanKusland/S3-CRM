import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateRangePickerComponent({ inspectionDate = new Date() }) {
	const [inspectionStart, inspectionEnd] = inspectionDate.split('-')

	const [dateRange, setDateRange] = useState([
		new Date(inspectionStart),
		new Date(inspectionEnd)
	])

	const [startDate, endDate] = dateRange

	return (
		<div>
			<DatePicker
				className='text-center max-w-28 rounded-r-none'
				dateFormat='dd.MM'
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				// form='createInspectionForm'
				onChange={(update: [Date, Date]) => {
					setDateRange(update)
				}}
				withPortal
				name='date'
			/>
		</div>
	)
}
export default DateRangePickerComponent
