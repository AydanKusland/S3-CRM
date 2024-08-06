import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { editInspectionAction } from 'utils/actions'

function DateRangePickerComponent({
	inspectionDateStart,
	inspectionDateEnd,
	edit,
	id
}: {
	inspectionDateStart: Date
	inspectionDateEnd: Date
	edit: boolean
	id: string | null
}) {
	const [dateRange, setDateRange] = useState([
		inspectionDateStart,
		inspectionDateEnd
	])

	const [startDate, endDate] = dateRange

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationFn: (values: string) => editInspectionAction(values),
		onSuccess: data => {
			if (!data) {
				console.log('NO DATA')
				return
			}
			console.log('inspection data changed!')
			queryClient.invalidateQueries({ queryKey: ['inspections'] })
		}
	})

	const changeInspectionDate = (update: Date[]) => {
		if (id && update[1]) {
			const time = `${update[0].toLocaleDateString('ru-RU', {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric'
			})}`
			mutate(id)
			console.log(time)
		}
	}

	return (
		<div>
			<DatePicker
				className='text-center max-w-44 rounded-r-none'
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
			/>
		</div>
	)
}
export default DateRangePickerComponent
