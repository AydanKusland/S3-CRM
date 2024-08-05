import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateRangePickerComponent({
	inspectionDate
}: {
	inspectionDate: Date[]
}) {
	const [dateRange, setDateRange] = useState([
		inspectionDate[0],
		inspectionDate[1]
	])

	const [startDate, endDate] = dateRange

	return (
		<div>
			<DatePicker
				className='text-center max-w-52 rounded-r-none'
				dateFormat='dd.MM.yyyy'
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
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
