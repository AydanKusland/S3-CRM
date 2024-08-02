const TNSelectOptions = ['23 Фонарь', '56 Кабель']
const factories = ['Xianxing', 'UTL', 'Новый завод']

export const InspectionForm = () => {
	return (
		<>
			{/* Товарное направление */}
			<select name='tovarnoeNapravlenie' className='rounded-none' required>
				{TNSelectOptions.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			{/* Название завода */}
			<select name='factoryShortName' className='rounded-none'>
				{factories.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			{/* Что за товар, номера проформ, количество артикулов */}
			<input
				required
				className='max-w-32 rounded-none'
				type='text'
				name='orderNumber'
				placeholder='Номер заказа'
				autoComplete='on'
			/>
			{/* Стоимость заказа */}
			<div className='relative '>
				<span className='absolute left-1 text-black '>¥</span>
				<input
					className='max-w-28 rounded-none'
					type='number'
					name='orderCost'
					step={10000}
					defaultValue={100000}
					min={0}
				/>
			</div>
			{/* Комментарий */}
			<input
				className='max-w-48 rounded-none'
				type='text'
				name='commentary'
				placeholder='комментарий'
				autoComplete='on'
			/>
			{/* Провинция */}
			<input
				required
				min={10}
				className='rounded-none'
				type='text'
				name='province'
				defaultValue='Zhejiang'
			/>
			{/* Адрес завода */}
			<input
				required
				min={10}
				className='rounded-none'
				type='text'
				name='factoryAddress'
				defaultValue='Yueqing'
			/>
		</>
	)
}
