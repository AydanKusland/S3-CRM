'use client'

import { inspectionMode } from 'utils/types'
import DateRangePickerComponent from './ui/DateRangePicker'
import { createInspectionAction } from 'utils/actions'

function CreateInspection() {
	const TNSelectOptions = [
		'23 Фонарь',
		'56 Кабель',
		'Выставка',
		'Прочее',
		'Офисная работа'
	]
	const factories = ['Xianxing', 'UTL', 'Новый завод']
	const inspectors = ['Любой', 'Инженер', 'Пронин', 'Волколупов', 'Соловьёв']

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		// e.preventDefault()
		const formData = new FormData(e.currentTarget)

		const formDataObj = Object.fromEntries(formData.entries())

		const formDataObject: any = {}

		for (const property in formDataObj) {
			formDataObject[property] = formData.get(property) as string
		}

		createInspectionAction(formDataObject)

		// send values to DB
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
					className='max-w-48'
					type='text'
					name='factoryAddress'
					defaultValue='Yueqing'
				/>
				{/* Исполнитель или Рекомендуемый исполнитель */}
				<select name='recommendedExecutor'>
					{inspectors.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{/* Submit Button */}
				<button type='submit'>Create!</button>
			</div>
		</form>
	)
}
export default CreateInspection
