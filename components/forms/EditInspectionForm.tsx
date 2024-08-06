'use client'

import { inspectionMode, InspectionType } from 'utils/types'
import { useState } from 'react'
import { CreateAttestationForm } from './CreateAttestationForm'
import { CreateInspectionForm } from './CreateInspectionForm'
import { CreateFieldTestsForm } from './CreateFieldTestForm'

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
	const [inspectionType, setInspectionType] = useState<string>(
		inspection.inspectionType
	)

	const chooseForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setInspectionType(e.target.selectedOptions[0].label)
	}

	return (
		<>
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
			{inspectionType === inspectionMode.Inspection && (
				<CreateInspectionForm inspection={inspection} />
			)}
			{inspectionType === inspectionMode.Attestation && (
				<CreateAttestationForm inspection={inspection} />
			)}
			{inspectionType === inspectionMode.FieldTest && (
				<CreateFieldTestsForm inspection={inspection} />
			)}
			{/* Комментарий */}
			<input
				className='max-w-48 rounded-none'
				type='text'
				name='commentary'
				placeholder={inspection.commentary}
				autoComplete='on'
			/>

			{/* Исполнитель или Рекомендуемый исполнитель */}
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

// {/* Товарное направление */}
// 			<select
// 				name='tovarnoeNapravlenie'
// 				className={`max-w-32 rounded-none`}
// 				required
// 			>
// 				{tovarnieNapravlenia.map(option => (
// 					<option key={option} value={option}>
// 						{option}
// 					</option>
// 				))}
// 			</select>
// 			{/* Название завода */}
// 			<select name='factoryShortName' className='rounded-none'>
// 				{factories.map(option => (
// 					<option key={option} defaultValue={inspection.factoryShortName}>
// 						{option}
// 					</option>
// 				))}
// 			</select>
// 			{/* Номер заказа*/}
// 			<input
// 				required
// 				className='max-w-16 rounded-none'
// 				type='text'
// 				name='orderNumber'
// 				defaultValue={inspection.orderNumber}
// 				autoComplete='on'
// 			/>
// 			{/* Стоимость заказа */}
// 			<div className='relative '>
// 				<span className='absolute top-px text-red-400'>¥</span>
// 				<input
// 					className='max-w-24 rounded-none pl-1'
// 					type='number'
// 					name='orderCost'
// 					step={10000}
// 					// value={inspection.orderCost}
// 					defaultValue={inspection.orderCost}
// 				/>
// 			</div>
// 			{/* Комментарий */}
// 			<input
// 				className='max-w-48 rounded-none'
// 				type='text'
// 				name='commentary'
// 				autoComplete='on'
// 				defaultValue={inspection.commentary}
// 			/>
// 			{/* Адрес завода */}
// 			<input
// 				required
// 				min={10}
// 				className='rounded-none'
// 				type='text'
// 				name='factoryAddress'
// 				defaultValue={inspection.factoryAddress}
// 			/>
// 			{/* Исполнитель */}
// 			<input
// 				required
// 				className='rounded-l-none'
// 				list='recommendedExecutors'
// 				name='recommendedExecutor'
// 				autoComplete='on'
// 				defaultValue={inspection.recommendedExecutor}
// 			/>
// 			<datalist id='recommendedExecutors'>
// 				{inspectors.map(option => (
// 					<option key={option} value={option} />
// 				))}
// 			</datalist>
