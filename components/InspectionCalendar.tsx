import { getWeek } from 'date-fns'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import DatePickerWrapped from './ui/DatePickerWrapped'
import { getPreviousOrNextWeek } from 'utils/helpers'

export default function InspectionCalendar({
	searchParams
}: {
	searchParams: { [key: string]: string | undefined }
}) {
	const currentWeekAndYear: string = `${new Date()
		.getFullYear()
		.toString()} ${getWeek(new Date()).toString()}`

	const yearAndWeek: string = searchParams.yearAndWeek || currentWeekAndYear

	const previousWeek = getPreviousOrNextWeek(yearAndWeek, 'prev')
	const nextWeek = getPreviousOrNextWeek(yearAndWeek, 'next')

	return (
		<div className='flex justify-center gap-2 py-1.5 text-xl'>
			<Link
				href={`?${new URLSearchParams({
					yearAndWeek: previousWeek
				})}`}
			>
				<FaChevronLeft />
			</Link>
			<DatePickerWrapped />

			<Link
				href={`?${new URLSearchParams({
					yearAndWeek: nextWeek
				})}`}
			>
				<FaChevronRight />
			</Link>
		</div>
	)
}
