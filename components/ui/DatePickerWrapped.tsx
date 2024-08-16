'use client'

import { getWeek } from 'date-fns'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

export default function DatePickerWrapped() {
	const params = useSearchParams()
	const yearAndWeek = params.get('yearAndWeek')
	const now = [
		new Date().getFullYear().toString(),
		getWeek(new Date()).toString()
	]
	const [year, weekNumber] = yearAndWeek?.split(' ') || now

	let d = 1 + (Number.parseInt(weekNumber) - 1) * 7
	const dateFromParams = new Date(Number.parseInt(year), 0, d)
	const [date, setDate] = useState(dateFromParams)
	const router = useRouter()
	const path = usePathname()

	const handleChange = (date: Date) => {
		setDate(date)
		const week = getWeek(date)
		const year = date.getFullYear()
		const yearAndWeek = `${year.toString()} ${week.toString()}`
		router.push(path + '?' + new URLSearchParams({ yearAndWeek }))
	}

	if (!yearAndWeek) {
		const week = getWeek(date)
		const year = date.getFullYear()
		const yearAndWeek = `${year.toString()} ${week.toString()}`
		router.push(path + '?' + new URLSearchParams({ yearAndWeek }))
	}

	return (
		<DatePicker
			className='max-w-24'
			selected={dateFromParams}
			onChange={(date: Date) => handleChange(date)}
			dateFormat='I/R'
			showWeekNumbers
			showWeekPicker
			calendarStartDay={1}
		/>
	)
}
