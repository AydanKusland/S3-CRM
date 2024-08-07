'use client'

import { BasicInspectionType } from 'utils/types'
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

		let formDataObj = {
			creatorId: '',
			date: '',
			inspectionType: '',
			province: '',
			recommendedExecutor: ''
		}

		for (const key of formData.keys()) {
			const useKey: keyof typeof formDataObj = key as keyof typeof formDataObj
			formDataObj[useKey] = formData.get(key) as string
		}
		mutate(formDataObj)
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
