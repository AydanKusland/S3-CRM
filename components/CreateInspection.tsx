'use client'

import { CreateAndEditInspectionType, inspectionMode } from 'utils/types'
import DateRangePickerComponent from './ui/DateRangePicker'
import { createInspectionAction } from 'utils/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { InspectionForm } from './InspectionForm'
import { OtherInspectionForms } from './OtherInspectionForms'

const inspectors = [
	'Любой',
	'Любой инженер',
	'Пронин',
	'Волколупов',
	'Соловьёв'
]

function CreateInspection() {
	const queryClient = useQueryClient()
	const [inspectionType, setInspectionType] = useState(
		inspectionMode.Inspection
	)

	const { mutate, isPending } = useMutation({
		mutationFn: (values: CreateAndEditInspectionType) =>
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
		const formDataObj = Object.fromEntries(formData.entries())
		mutate(formDataObj)
		// return inputs to default?
	}

	const chooseForm = (e: React.ChangeEvent) => {
		setInspectionType(e.target.selectedOptions[0].label)
		console.log(e.target.selectedOptions[0].label)
	}

	return (
		<form onSubmit={handleSubmit} className='p-3 border-2 grid'>
			<div className='flex flex-wrap gap-y-2'>
				{/* Даты */}
				<DateRangePickerComponent inspectionDate={'03.01 - 05.01'} />
				{/* Тип работ */}
				<select
					name='inspectionType'
					className='max-w-56 rounded-none'
					onChange={chooseForm}
					defaultValue={inspectionType}
				>
					{Object.values(inspectionMode).map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{/* Выбранный вид формы */}
				{inspectionType === inspectionMode.Inspection ? (
					<InspectionForm />
				) : (
					<OtherInspectionForms />
				)}
				{/* Исполнитель или Рекомендуемый исполнитель */}
				<input
					required
					className='rounded-l-none'
					list='recommendedExecutors'
					name='recommendedExecutor'
					autoComplete='on'
					placeholder='исполнитель'
				/>
				<datalist id='recommendedExecutors'>
					{inspectors.map(option => (
						<option key={option} value={option} />
					))}
				</datalist>
				{/* Submit Button */}
				<button type='submit' disabled={isPending}>
					Create!
				</button>
			</div>
		</form>
	)
}
export default CreateInspection
