// client component, child of InspectionTypeSelect

import { InspectionTypeWithId } from 'utils/types'
import { CreateAttestationForm } from './CreateAttestationForm'
import { debounce } from '@/utils/helpers'

export const CreateInspectionForm = ({
	inspection,
	inspectionType
}: {
	inspection?: InspectionTypeWithId
	inspectionType: string
}) => {
	return (
		<>
			<CreateAttestationForm
				inspection={inspection}
				inspectionType={inspectionType}
			/>
			{/* Номера заказа*/}
			<input
				required
				className='max-w-32 rounded-none '
				type='text'
				name='orderNumber'
				defaultValue={inspection?.orderNumber}
				placeholder='Номер заказа'
				autoComplete='on'
				onChange={debounce(inspection)}
			/>
			{/* Стоимость заказа */}
			<div className='relative'>
				<span className='text-lg absolute top-1/2 -translate-y-1/2 text-red-700 bg-transparent'>
					¥
				</span>
				<input
					className='max-w-20 rounded-none'
					type='number'
					name='orderCost'
					step={10000}
					defaultValue={inspection?.orderCost || 100000}
					min={0}
					onChange={debounce(inspection)}
				/>
			</div>
		</>
	)
}
