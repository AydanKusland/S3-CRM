'use client'

import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'
import { InspectionType } from 'utils/types'

const factories = ['Xianxing', 'UTL', 'Huajia']

const provinces = ['Zhejiang', 'Guangdong', 'Fujiang']

const inspectors = [
	'Любой',
	'Любой инженер',
	'Пронин',
	'Волколупов',
	'Соловьёв'
]

export const EditInspectionForm = ({
	inspection
}: {
	inspection: InspectionType
}) => {
	return (
		<>
			{/* Товарное направление */}
			<select
				name='tovarnoeNapravlenie'
				className={`max-w-32 rounded-none`}
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
					<option
						key={option}
						value={option}
						selected={inspection.factoryShortName === option}
					>
						{option}
					</option>
				))}
			</select>
			{/* Номер заказа*/}
			<input
				required
				className='max-w-16 rounded-none'
				type='text'
				name='orderNumber'
				value={inspection.orderNumber}
				autoComplete='on'
			/>
			{/* Стоимость заказа */}
			<div className='relative '>
				<span className='absolute top-px text-red-400'>¥</span>
				<input
					className='max-w-24 rounded-none pl-1'
					type='number'
					name='orderCost'
					step={10000}
					// value={inspection.orderCost}
					placeholder={inspection.orderCost}
				/>
			</div>
			{/* Комментарий */}
			<input
				className='max-w-48 rounded-none'
				type='text'
				name='commentary'
				autoComplete='on'
				placeholder={inspection.commentary}
			/>
			{/* Адрес завода */}
			<input
				required
				min={10}
				className='rounded-none'
				type='text'
				name='factoryAddress'
				placeholder={inspection.factoryAddress}
			/>
			{/* Исполнитель */}
			<input
				required
				className='rounded-l-none'
				list='recommendedExecutors'
				name='recommendedExecutor'
				autoComplete='on'
				placeholder={inspection.recommendedExecutor}
			/>
			<datalist id='recommendedExecutors'>
				{inspectors.map(option => (
					<option key={option} value={option} />
				))}
			</datalist>
		</>
	)
}
