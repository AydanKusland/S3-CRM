import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { editInspectionAction } from 'utils/actions'
import { changeDateFormatToDDMMYY } from 'utils/helpers'

function DateRangePickerComponent({
	inspectionDate,
	id
}: {
	inspectionDate: Date[]
	id?: string
}) {
	const [dateRange, setDateRange] = useState(inspectionDate)

	const [startDate, endDate] = dateRange

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationFn: (values: { id: string; time: string }) =>
			editInspectionAction(values),
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
			const time = `${changeDateFormatToDDMMYY(
				update[0]
			)} - ${changeDateFormatToDDMMYY(update[1])}`
			mutate({ id, time })
		}
	}

	return (
		<div>
			<DatePicker
				className='text-center max-w-40 rounded-r-none'
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
