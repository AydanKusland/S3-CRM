'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import DateRangePickerComponent from './ui/DateRangePicker'
import { InspectionType } from 'utils/types'
import { deleteInspectionAction } from 'utils/actions'
import { MainForm } from './forms/MainForm'
import { parseDateStringFromDDMMYYToDateStringMMDDYY } from 'utils/helpers'

export const Inspection = ({ inspection }: { inspection: InspectionType }) => {
	const [startDate, endDate] = [
		parseDateStringFromDDMMYYToDateStringMMDDYY(inspection.startDate),
		parseDateStringFromDDMMYYToDateStringMMDDYY(inspection.endDate)
	]

	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationFn: (id: string) => deleteInspectionAction(id),
		onSuccess: data => {
			if (!data) {
				console.log('SOMETHING WENT WRONG WHILE DELETING INSPECTION')
				return
			}
			console.log('inspection deleted!')
			queryClient.invalidateQueries({ queryKey: ['inspections'] })
		}
	})

	const deleteInspection = () => {
		mutate(inspection.id)
	}
	const editInspection = () => {
		mutate(inspection.id)
	}

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
					onClick={deleteInspection}
					disabled={isPending}
					type='button'
				>
					Delete
				</button>
			</div>
		</form>
	)
}
