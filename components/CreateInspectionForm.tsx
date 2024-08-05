'use client'

import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'
import { InspectionType } from 'utils/types'

const factories = ['Xianxing', 'UTL', 'Huajia']

const provinces = ['Zhejiang', 'Guangdong', 'Fujiang']

export const CreateInspectionForm = () => {
	return (
		<>
			{/* Товарное направление */}
			<select
				name='tovarnoeNapravlenie'
				className='max-w-32 rounded-none'
				required
			>
				{tovarnieNapravlenia.map(option => (
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
			{/* Номера заказа*/}
			<input
				required
				className='max-w-28 rounded-none'
				type='text'
				name='orderNumber'
				placeholder='Номер заказа'
				autoComplete='on'
			/>
			{/* Стоимость заказа */}
			<div className='relative '>
				<span className='absolute text-red-500 top-px'>¥</span>
				<input
					className='max-w-24 rounded-none pl-1 '
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
			<select
				required
				className='rounded-none'
				name='province'
				defaultValue='Zhejiang'
			>
				{provinces.map(province => (
					<option key={province}>{province}</option>
				))}
			</select>
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
