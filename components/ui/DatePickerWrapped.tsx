'use client'

import { getWeek } from 'date-fns'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'

export default function DatePickerWrapped({ date }: { date: Date }) {
	const router = useRouter()

	const handleChange = (date: Date) => {
		const address = `/inspections/${date.getFullYear()}-${getWeek(date)}`
		router.push(address)
	}

	return (
		<DatePicker
			className='max-w-28'
			selected={date}
			onChange={(date: Date) => handleChange(date)}
			dateFormat='R - II'
			showWeekNumbers
			calendarStartDay={1}
		/>
	)
}
