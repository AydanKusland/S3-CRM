'use client'

import { InspectionTypeWithId } from 'utils/types'
import useOptimizedDebounce from 'utils/useOptimizedDebounce'
import { CreateAttestationForm } from './CreateAttestationForm'

export const CreateInspectionForm = ({
	inspection,
	inspectionType
}: {
	inspection?: InspectionTypeWithId
	inspectionType: string
}) => {
	// So they wouldn't interfere with each others timeouts
	const optimizedDebounce = useOptimizedDebounce(inspection)
	const optimizedDebounce2 = useOptimizedDebounce(inspection)

	return (
		<>
			<CreateAttestationForm
				inspection={inspection}
				inspectionType={inspectionType}
			/>
			{/* Номера заказа*/}
			<input
				required
				className='max-w-28 rounded-none'
				type='text'
				name='orderNumber'
				defaultValue={inspection?.orderNumber}
				placeholder='Номер заказа'
				autoComplete='on'
				onChange={optimizedDebounce}
			/>
			{/* Стоимость заказа */}
			<div className='relative '>
				<span className='absolute text-red-500 top-px pl-1'>¥</span>
				<input
					className='max-w-24 rounded-none pl-3 '
					type='number'
					name='orderCost'
					step={10000}
					defaultValue={inspection?.orderCost || 91440}
					min={0}
					onChange={optimizedDebounce2}
				/>
			</div>
		</>
	)
}
