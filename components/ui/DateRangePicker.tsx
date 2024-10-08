'use client'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { editInspectionAction } from 'actions/inspectionActions'
import {
	changeDateFormatToDDMMYY,
	parseWeekAndYearFromStartDate
} from 'utils/helpers'

// This stupid piece of shit takes date in MM.DD.YY format
// But shows and gives date in DD.MM.YY format

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
			const year_week: string = parseWeekAndYearFromStartDate(startDate)
			editInspectionAction(id, {
				startDate,
				endDate,
				year_week
			})
		}
	}

	return (
		<DatePicker
			className='grow rounded-r-none w-full min-h-[30px] h-full'
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
