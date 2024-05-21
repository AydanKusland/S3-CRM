import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateRangePickerComponent() {
	const today = new Date()
	// const fiveDaysFromNow = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000)

	const [dateRange, setDateRange] = useState([today, today])
	const [startDate, endDate] = dateRange

	return (
		<DatePicker
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
	)
}
export default DateRangePickerComponent
