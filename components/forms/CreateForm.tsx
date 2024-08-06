import { useState } from 'react'

import { inspectionMode } from 'utils/types'
import { CreateInspectionForm } from './CreateInspectionForm'
import { CreateAttestationForm } from './CreateAttestationForm'
import { CreateFieldTestsForm } from './CreateFieldTestForm'

const inspectors = [
	'Любой',
	'Любой инженер',
	'Пронин',
	'Волколупов',
	'Соловьёв'
]

const provinces = ['Zhejiang', 'Guangdong', 'Fujiang', 'Shanghai']

export const CreateForm = () => {
	const [inspectionType, setInspectionType] = useState<string>(
		inspectionMode.Inspection
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
				className='max-w-48 rounded-none'
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
				<CreateInspectionForm inspection={null} />
			)}
			{inspectionType === inspectionMode.Attestation && (
				<CreateAttestationForm inspection={null} />
			)}
			{inspectionType === inspectionMode.FieldTest && (
				<CreateFieldTestsForm inspection={null} />
			)}
			{/* Комментарий */}
			<input
				className='max-w-48 rounded-none'
				type='text'
				name='commentary'
				placeholder='комментарий'
				autoComplete='on'
			/>

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
		</>
	)
}
