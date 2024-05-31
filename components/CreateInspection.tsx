'use client'

import { CreateAndEditInspectionType, inspectionMode } from 'utils/types'
import DateRangePickerComponent from './ui/DateRangePicker'
import { createInspectionAction } from 'utils/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const TNSelectOptions = [
	'23 Фонарь',
	'56 Кабель',
	'Выставка',
	'Прочее',
	'Офисная работа'
]
const factories = ['Xianxing', 'UTL', 'Новый завод']
const inspectors = ['Любой', 'Инженер', 'Пронин', 'Волколупов', 'Соловьёв']

function CreateInspection() {
	const queryClient = useQueryClient()

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
		const formDataObject: any = {}
		for (const property in formDataObj) {
			// extract province property from address
			if (property === 'factoryAddress') {
				const factoryAddressString = formDataObj[property] as string
				const [province, ...rest] = factoryAddressString.split(',')
				formDataObject.province = province
				formDataObject.factoryAddress = rest.join(' ')
			} else formDataObject[property] = formData.get(property) as string
		}

		mutate(formDataObject)
		// return inputs to default?
	}

	return (
		<form onSubmit={handleSubmit} className='p-2'>
			<div className='flex flex-wrap justify-around gap-y-2'>
				{/* Даты */}
				<DateRangePickerComponent />
				{/* Тип работ */}
				<select name='inspectionType' className='max-w-56'>
					{Object.values(inspectionMode).map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{/* Товарное направление */}
				<select name='tovarnoeNapravlenie' required>
					{TNSelectOptions.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{/* Название завода */}
				<select name='factoryShortName'>
					{factories.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{/* Что за товар, номера проформ, количество артикулов */}
				<input
					className='w-64'
					type='text'
					name='productInfo'
					placeholder='Заказ, Артикулы, Наименование'
					autoComplete='on'
				/>
				{/* Стоимость заказа */}
				<div className='relative '>
					<span className='absolute left-1 text-black '>¥</span>
					<input
						className='max-w-28'
						type='number'
						name='orderCost'
						step={10000}
						defaultValue={100000}
						min={0}
					/>
				</div>
				{/* Комментарий */}
				<input
					className='max-w-48'
					type='text'
					name='commentary'
					placeholder='комментарий'
					autoComplete='on'
				/>
				{/* Адрес завода */}
				<input
					required
					min={10}
					className='max-w-48'
					type='text'
					name='factoryAddress'
					defaultValue='Zhejiang, Yueqing'
				/>
				{/* Исполнитель или Рекомендуемый исполнитель */}
				<input
					required
					list='recommendedExecutors'
					name='recommendedExecutor'
					autoComplete='on'
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
