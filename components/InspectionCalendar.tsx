'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { changeDateByOneWeek } from 'utils/helpers'

function InspectionCalendar() {
	const [startWeek, setStartWeek] = useState(new Date())

	return (
		<div className='flex justify-center gap-2 py-1.5 text-xl'>
			<button
				onClick={() => setStartWeek(changeDateByOneWeek(startWeek, 'minus'))}
			>
				<FaChevronLeft />
			</button>
			<div>
				<DatePicker
					className='max-w-24'
					selected={startWeek}
					onChange={(date: Date) => setStartWeek(date)}
					dateFormat='I/R'
					showWeekNumbers
					showWeekPicker
					calendarStartDay={1}
				/>
			</div>
			<button
				onClick={() => setStartWeek(changeDateByOneWeek(startWeek, 'plus'))}
			>
				<FaChevronRight />
			</button>
		</div>
	)
}

export default InspectionCalendar
