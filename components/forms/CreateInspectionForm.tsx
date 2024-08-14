// 'use client'

// import { InspectionTypeWithId } from 'utils/types'
// import { TovarnoeNapravlenieInput } from '../input fields/TovarnoeNapravlenieInput'
// import { FactoryNameInput } from '../input fields/FactoryNameInput'
// import { FactoryAddress } from '../input fields/FactoryAddress'
// import useOptimizedDebounce from 'utils/useOptimizedDebounce'

// export const CreateInspectionForm = ({
// 	inspection
// }: {
// 	inspection?: InspectionTypeWithId
// }) => {
// 	const optimizedDebounce = inspection && useOptimizedDebounce(inspection)
// 	const optimizedDebounce2 = inspection && useOptimizedDebounce(inspection)

// 	return (
// 		<>
// 			{/* Товарное направление */}
// 			<TovarnoeNapravlenieInput inspection={inspection} />
// 			{/* Название завода */}
// 			<FactoryNameInput inspectionTypeIsInspection inspection={inspection} />
// 			{/* Номера заказа*/}
// 			<input
// 				required
// 				className='max-w-28 rounded-none'
// 				type='text'
// 				name='orderNumber'
// 				defaultValue={inspection?.orderNumber}
// 				placeholder='Номер заказа'
// 				autoComplete='on'
// 				onChange={optimizedDebounce}
// 			/>
// 			{/* Стоимость заказа */}
// 			<div className='relative '>
// 				<span className='absolute text-red-500 top-px pl-1'>¥</span>
// 				<input
// 					className='max-w-24 rounded-none pl-3 '
// 					type='number'
// 					name='orderCost'
// 					step={10000}
// 					defaultValue={inspection?.orderCost || 91440}
// 					min={0}
// 					onChange={optimizedDebounce2}
// 				/>
// 			</div>
// 			{/* Адрес завода */}
// 			<FactoryAddress inspection={inspection} />
// 		</>
// 	)
// }
