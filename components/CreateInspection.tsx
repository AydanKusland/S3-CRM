'use client'

import DateRangePickerComponent from './ui/DateRangePicker'

function CreateInspection() {
	const TNSelectOptions = ['23 Фонарь', '56 Кабель']
	const factories = ['Xianxing', 'UTL']

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const values = Array.from(formData.entries())
		console.log(values)
		// send values to DB
		// return inputs to default?
	}

	// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMTYxMmU4NTItMWRmMi00YzM0LWIyMzktYWQ5M2ZkNmI2YTdiIiwidGVuYW50X2lkIjoiMWExMTRkYWY0NTY1N2UwZjNjZGVhZDNhZDdiMmQ1MTc2ZjQ0ZDYwNGE3YTVkYzI5N2RhYmM0ZWRiODJiNTViMSIsImludGVybmFsX3NlY3JldCI6Ijk0YjY2MzBjLTU0YzEtNGJkMy05OGI1LWU5ZTYxMWYwYTg1MyJ9.caQH811o5IkNR2lOS7Iy3pZ2zL4uUY7LKp5DRKm68NI

	return (
		<form className='border-2 flex' onSubmit={handleSubmit}>
			<DateRangePickerComponent />
			<select name='TN' required>
				{TNSelectOptions.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			<select name='FactoryName'>
				{factories.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			RMB
			<input
				type='number'
				name='orderPrice'
				step={10000}
				defaultValue={100000}
			/>
			<input type='text' name='comment' placeholder='комментарий' />
			<button type='submit'>Create!</button>
		</form>
	)
}
export default CreateInspection
