import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'
import { InspectionType } from 'utils/types'

const factories = ['Xianxing', 'UTL', 'Huajia']

export const CreateInspectionForm = ({
	inspection
}: {
	inspection: InspectionType | null
}) => {
	return (
		<>
			{/* Товарное направление */}
			<select
				name='tovarnoeNapravlenie'
				className='max-w-36 rounded-none'
				defaultValue={inspection?.tovarnoeNapravlenie}
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
						defaultValue={inspection?.factoryShortName}
						value={option}
					>
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
			<input
				required
				min={10}
				className='rounded-none'
				type='text'
				name='factoryAddress'
				defaultValue={inspection?.factoryAddress}
				placeholder='Адрес завода'
			/>
		</>
	)
}
