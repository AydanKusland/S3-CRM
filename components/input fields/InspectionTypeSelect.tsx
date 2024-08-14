'use client'

import { useState } from 'react'
import { inspectionMode, InspectionTypeWithId } from 'utils/types'
import { CreateInspectionForm } from '../forms/CreateInspectionFormV2'
import { editInspectionAction } from 'utils/actions'

export const InspectionTypeSelect = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	const [inspectionType, setInspectionType] = useState<string>(
		inspection?.inspectionType || inspectionMode[0]
	)

	const chooseForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newInspectionType = e.target.selectedOptions[0]
			.label as keyof InspectionTypeWithId
		setInspectionType(newInspectionType)
		if (inspection)
			editInspectionAction(inspection.id, { inspectionType: newInspectionType })
	}
	return (
		<>
			<select
				name='inspectionType'
				className={`max-w-${inspection ? '44' : '52'} rounded-none`}
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
			{(inspectionType === inspectionMode[1] ||
				inspectionType === inspectionMode[2] ||
				inspectionType === inspectionMode[0]) && (
				<CreateInspectionForm
					inspection={inspection}
					inspectionType={inspectionType}
				/>
			)}
		</>
	)
}
