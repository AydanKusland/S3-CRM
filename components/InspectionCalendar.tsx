'use client'

import { getWeek } from 'date-fns'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { changeDateByOneWeek } from 'utils/helpers'

export default function InspectionCalendar() {
	const [startWeek, setStartWeek] = useState(new Date())
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const changeWeek = (
		date: Date,
		previousOrNextWeek: 'previous' | 'current' | 'next'
	): void => {
		const newStartWeek: Date = changeDateByOneWeek(date, previousOrNextWeek)
		setStartWeek(newStartWeek)
		setNewWeekInPath(newStartWeek)
	}

	const setNewWeekInPath = (newStartWeek: Date) => {
		const params = new URLSearchParams(searchParams)
		params.set('week', getWeek(newStartWeek).toString())
		replace(`${pathname}?${params.toString()}`)
	}

	return (
		<div className='flex justify-center gap-2 py-1.5 text-xl'>
			<button onClick={() => changeWeek(startWeek, 'previous')}>
				<FaChevronLeft />
			</button>
			<div>
				<DatePicker
					className='max-w-24'
					selected={startWeek}
					onChange={(date: Date) => changeWeek(date, 'current')}
					dateFormat='I/R'
					showWeekNumbers
					showWeekPicker
					calendarStartDay={1}
				/>
			</div>
			<button onClick={() => changeWeek(startWeek, 'next')}>
				<FaChevronRight />
			</button>
		</div>
	)
}
