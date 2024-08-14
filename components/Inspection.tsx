'use client'

import DateRangePickerComponent from './ui/DateRangePicker'
import { InspectionTypeWithId } from 'utils/types'
import { deleteInspectionAction } from 'utils/actions'
import { MainForm } from './forms/MainForm'
import { parseDateStringFromDDMMYYToDateStringMMDDYY } from 'utils/helpers'
import { useFormStatus } from 'react-dom'

export const Inspection = ({
	inspection
}: {
	inspection: InspectionTypeWithId
}) => {
	const [startDate, endDate] = [
		parseDateStringFromDDMMYYToDateStringMMDDYY(inspection.startDate),
		parseDateStringFromDDMMYYToDateStringMMDDYY(inspection.endDate)
	]

	const { pending } = useFormStatus()

	return (
		<form>
			<div key={inspection.id} className='mx-auto flex flex-wrap py-1 text-sm'>
				{/* Даты */}
				<DateRangePickerComponent
					inspectionDate={[startDate, endDate]}
					id={inspection.id}
				/>
				<MainForm inspection={inspection} />
				<button
					className='ml-2'
					onClick={() => {
						deleteInspectionAction(inspection.id)
					}}
					disabled={pending}
					type='button'
				>
					Delete
				</button>
			</div>
		</form>
	)
}
