import { useState } from 'react'
import { inspectionMode, InspectionType } from 'utils/types'
import { CreateInspectionForm } from '../forms/CreateInspectionForm'
import { CreateAttestationForm } from '../forms/CreateAttestationForm'

export const InspectionTypeSelect = ({
	inspection
}: {
	inspection?: InspectionType
}) => {
	const [inspectionType, setInspectionType] = useState<string>(
		inspection?.inspectionType || inspectionMode[0]
	)

	const chooseForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setInspectionType(e.target.selectedOptions[0].label)
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
			{inspectionType === inspectionMode[0] && (
				<CreateInspectionForm inspection={inspection} />
			)}
			{(inspectionType === inspectionMode[1] ||
				inspectionType === inspectionMode[2]) && (
				<CreateAttestationForm inspection={inspection} />
			)}
		</>
	)
}
