'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import DateRangePickerComponent from './ui/DateRangePicker'
import { InspectionType } from 'utils/types'
import { deleteInspectionAction } from 'utils/actions'
import { EditInspectionForm } from './EditInspectionForm'

export const Inspection = ({ inspection }: { inspection: InspectionType }) => {
	const [startDateString, endDateString] = inspection.date.split(' - ')

	const startDate: Date = new Date(startDateString)
	const endDate: Date = new Date(endDateString)

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
		<div key={inspection.id} className='mx-auto flex py-1.5'>
			{/* Даты */}
			<DateRangePickerComponent inspectionDate={[startDate, endDate]} />
			<EditInspectionForm inspection={inspection} />
			<button
				className='ml-2'
				onClick={deleteInspection}
				type='submit'
				disabled={isPending}
			>
				Delete
			</button>
		</div>
	)
}
