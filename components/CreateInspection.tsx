'use client'

import {
	BasicInspectionType,
	InspectionType,
	inspectionMode
} from 'utils/types'
import { createInspectionAction } from 'utils/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MainForm } from './forms/MainForm'
import DateRangePickerComponent from './ui/DateRangePicker'

function CreateInspection() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: (values: BasicInspectionType) => createInspectionAction(values),
		onSuccess: data => {
			if (!data) {
				console.log('NO DATA')
				return
			}
			queryClient.invalidateQueries({ queryKey: ['inspections'] })
		}
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const date: string = formData.get('date') as string
		formData.delete('date')
		const [startDate, endDate] = date.split(' - ')
		let createInspectionData: BasicInspectionType = {
			startDate,
			endDate,
			inspectionType: inspectionMode.Attestation,
			province: '',
			recommendedExecutor: ''
		}

		for (const key of formData.keys()) {
			const useKey: keyof BasicInspectionType =
				key as keyof typeof createInspectionData

			if (formData.get(useKey) != null) {
				if (useKey === 'inspectionType')
					createInspectionData[useKey] = formData.get(useKey) as inspectionMode
				else createInspectionData[useKey] = formData.get(useKey) as string
			}
		}
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
