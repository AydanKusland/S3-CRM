'use client'

import { BasicInspectionType, InspectionType } from 'utils/types'
import { createInspectionAction } from 'utils/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateForm } from './forms/CreateForm'
import DateRangePickerComponent from './ui/DateRangePicker'

function CreateInspection() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: (values: BasicInspectionType | InspectionType) =>
			createInspectionAction(values),
		onSuccess: data => {
			if (!data) {
				console.log('NO DATA')
				return
			}
			console.log('inspection created!')
			queryClient.invalidateQueries({ queryKey: ['inspections'] })
		}
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)

		let formDataObj = {
			creatorId: 'pipa',
			date: '01.01.2001',
			inspectionType: '',
			province: 'defaultProvince',
			recommendedExecutor: 'cat'
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
				<DateRangePickerComponent
					inspectionDateStart={new Date()}
					inspectionDateEnd={new Date()}
					edit={false}
					id={null}
				/>
				<CreateForm />
				{/* Submit Button */}
				<button type='submit' disabled={isPending} className='ml-1'>
					Create!
				</button>
			</div>
		</form>
	)
}
export default CreateInspection
