'use client'

import { inspectionMode } from 'utils/types'
import DateRangePickerComponent from './ui/DateRangePicker'

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
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const values = Array.from(formData.entries())
		console.log(values)
		// send values to DB
		// return inputs to default?
	}

	return (
		<form onSubmit={handleSubmit} className='p-2'>
			<div className='flex flex-wrap justify-around gap-y-2'>
				{/* Даты */}
				<DateRangePickerComponent />
				{/* Товарное направление */}
				<select name='TN' required>
					{TNSelectOptions.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{/* Название завода */}
				<select name='FactoryName'>
					{factories.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{/* Тип работ */}
				<select name='inspectionType' className='max-w-56'>
					{Object.values(inspectionMode).map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{/* Что за товар, номера проформ, количество артикулов */}
				<input
					className='w-64'
					type='text'
					name='productType'
					placeholder='Заказ, Артикулы, Наименование'
				/>
				{/* Стоимость заказа */}
				<div className='relative '>
					<span className='absolute left-1 text-black '>¥</span>
					<input
						className='max-w-28'
						type='number'
						name='orderPrice'
						step={10000}
						defaultValue={100000}
					/>
				</div>
				{/* Комментарий */}
				<input
					className='max-w-48'
					type='text'
					name='comment'
					placeholder='комментарий'
				/>
				{/* Адрес завода */}
				<input
					className='max-w-48'
					type='text'
					name='address'
					defaultValue='Yueqing'
				/>
				{/* Исполнитель */}
				<select name='ispolnitel'>
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
