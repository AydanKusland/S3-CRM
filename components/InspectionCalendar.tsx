'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'

function InspectionCalendar() {
	const [startDate, setStartDate] = useState(new Date())
	return (
		<div className='flex justify-center gap-4 p-1 capitalize border-2'>
			<button>Previous Week</button>
			<div>
				<DatePicker
					className='max-w-20'
					selected={startDate}
					onChange={(date: Date) => setStartDate(date)}
					dateFormat='I/R'
					locale='en-US'
					showWeekNumbers
					showWeekPicker
				/>
			</div>
			<button>Next Week</button>
		</div>
	)
}

export default InspectionCalendar
