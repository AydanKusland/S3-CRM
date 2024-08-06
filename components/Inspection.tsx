'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import DateRangePickerComponent from './ui/DateRangePicker'
import { InspectionType } from 'utils/types'
import { deleteInspectionAction } from 'utils/actions'
import { EditInspectionForm } from './forms/EditInspectionForm'

export const Inspection = ({ inspection }: { inspection: InspectionType }) => {
	const [startDateString, endDateString] = inspection.date.split(' - ')
	const standardizedStartDateString = `${startDateString.charAt(
		3
	)}${startDateString.charAt(4)}.${startDateString.charAt(
		0
	)}${startDateString.charAt(1)}.${startDateString.charAt(
		6
	)}${startDateString.charAt(7)}`

	const standardizedEndDateString = `${startDateString.charAt(
		3
	)}${startDateString.charAt(4)}.${startDateString.charAt(
		0
	)}${startDateString.charAt(1)}.${startDateString.charAt(
		6
	)}${startDateString.charAt(7)}`

	const startDate: Date = new Date(standardizedStartDateString)
	const endDate: Date = new Date(standardizedEndDateString)

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
			<div key={inspection.id} className='mx-auto flex flex-wrap py-1.5'>
				{/* Даты */}
				<DateRangePickerComponent
					inspectionDateStart={startDate}
					inspectionDateEnd={endDate}
					edit={true}
					id={inspection.id}
				/>
				<EditInspectionForm inspection={inspection} />
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
