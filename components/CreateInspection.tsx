'use client'

import { InspectionType } from 'utils/types'
import { createInspectionAction } from 'utils/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MainForm } from './forms/MainForm'
import DateRangePickerComponent from './ui/DateRangePicker'
import { extractDataFromFormData } from 'utils/helpers'

function CreateInspection() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: (values: InspectionType) => createInspectionAction(values),
		onSuccess: data => {
			if (!data) {
				console.log('NO DATA')
				return
			}
			queryClient.invalidateQueries({ queryKey: ['inspections'] })
		}
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const createInspectionData = extractDataFromFormData(formData)
		mutate(createInspectionData)
	}

	return (
		<form onSubmit={handleSubmit} className='p-3 border-2 grid'>
			<div className='flex flex-wrap gap-y-2 '>
				{/* Даты */}
				<DateRangePickerComponent inspectionDate={[new Date(), new Date()]} />
				<MainForm />
				{/* Submit Button */}
				<button type='submit' disabled={isPending} className='ml-1'>
					Create!
				</button>
			</div>
		</form>
	)
}
export default CreateInspection
