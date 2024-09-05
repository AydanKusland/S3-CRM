import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import DatePickerWrapped from '../ui/DatePickerWrapped'
import { getPreviousOrNextWeek } from 'utils/helpers'
import { getWeek, parse } from 'date-fns'

export default function InspectionCalendar({
	yearAndWeek
}: {
	yearAndWeek?: string
}) {
	if (!yearAndWeek)
		yearAndWeek = `${new Date().getFullYear()}-${getWeek(new Date())}`
	const previousWeek = getPreviousOrNextWeek(yearAndWeek, 'prev')
	const nextWeek = getPreviousOrNextWeek(yearAndWeek, 'next')

	const dateFromParams = parse(`${yearAndWeek}`, 'RRRR-I', new Date())

	return (
		<div className='flex justify-center gap-2 py-3 text-xl items-center'>
			<Link href={`/inspections/${previousWeek}`}>
				<FaChevronLeft />
			</Link>
			<DatePickerWrapped date={dateFromParams} />
			<Link href={`/inspections/${nextWeek}`}>
				<FaChevronRight />
			</Link>
		</div>
	)
}
