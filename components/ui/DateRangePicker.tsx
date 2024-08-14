'use client'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { editInspectionAction } from 'utils/actions'
import { changeDateFormatToDDMMYY } from 'utils/helpers'

function DateRangePickerComponent({
	inspectionDate,
	id
}: {
	inspectionDate: Date[]
	id?: string
}) {
	const [dateRange, setDateRange] = useState(inspectionDate)

	const [startDate, endDate] = dateRange

	const changeInspectionDate = (update: Date[]) => {
		if (id && update[1]) {
			const startDate: string = changeDateFormatToDDMMYY(update[0])
			const endDate: string = changeDateFormatToDDMMYY(update[1])
			editInspectionAction(id, { startDate, endDate })
		}
	}

	return (
		<DatePicker
			className={`max-w-${id ? '36' : '40'} rounded-r-none`}
			dateFormat='dd.MM.yy'
			selectsRange={true}
			startDate={startDate}
			endDate={endDate}
			onChange={(update: [Date, Date]) => {
				setDateRange(update)
				changeInspectionDate(update)
			}}
			withPortal
			name='date'
			calendarStartDay={1}
		/>
	)
}
export default DateRangePickerComponent

const classes = ['max-w-36', 'max-w-40']
