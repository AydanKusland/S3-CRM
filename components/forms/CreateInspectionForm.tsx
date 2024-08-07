import { InspectionType } from 'utils/types'
import { TovarnoeNapravlenieInput } from '../input fields/TovarnoeNapravlenieInput'
import { FactoryNameInput } from '../input fields/FactoryNameInput'
import { FactoryAddress } from '../input fields/FactoryAddress'

export const CreateInspectionForm = ({
	inspection
}: {
	inspection?: InspectionType
}) => {
	return (
		<>
			{/* Товарное направление */}
			<TovarnoeNapravlenieInput TN={inspection?.tovarnoeNapravlenie} />
			{/* Название завода */}
			<FactoryNameInput
				inspectionTypeIsInspection
				factoryName={inspection?.factoryShortName}
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
				/>
			</div>
			{/* Адрес завода */}
			<FactoryAddress address={inspection?.factoryAddress} />
		</>
	)
}
