'use client'

import { getWeek } from 'date-fns'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { changeDateByOneWeek } from 'utils/helpers'

export default function InspectionCalendar() {
	const [startWeek, setStartWeek] = useState(new Date())
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	// useEffect(() => {
	// 	const week = getWeek(startWeek).toString()
	// 	const params = new URLSearchParams(searchParams)
	// 	params.set('week', week.toString())
	// 	replace(`${pathname}?${params.toString()}`)
	// }, [startWeek, pathname, replace, searchParams])

	const changeWeek = (
		currentWeek: Date,
		previousOrNextWeek: 'plus' | 'minus'
	) => {
		const newStartWeek: Date = changeDateByOneWeek(
			startWeek,
			previousOrNextWeek
		)
		setStartWeek(newStartWeek)
		const params = new URLSearchParams(searchParams)
		params.set('week', getWeek(newStartWeek).toString())
		replace(`${pathname}?${params.toString()}`)
	}

	return (
		<div className='flex justify-center gap-2 py-1.5 text-xl'>
			<button onClick={() => changeWeek(startWeek, 'minus')}>
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
			<button onClick={() => changeWeek(startWeek, 'plus')}>
				<FaChevronRight />
			</button>
		</div>
	)
}
