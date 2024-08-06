import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'
import { InspectionType } from 'utils/types'

export const CreateFieldTestsForm = ({
	inspection
}: {
	inspection: InspectionType | null
}) => {
	return (
		<>
			{/* Товарное направление */}
			<select
				name='tovarnoeNapravlenie'
				className='max-w-32 rounded-none'
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
			<input
				name='factoryShortName'
				className='rounded-none'
				defaultValue={inspection?.factoryShortName}
				placeholder='Название завода'
			/>

			{/* Адрес завода */}
			<input
				required
				min={10}
				className='rounded-none'
				type='text'
				name='factoryAddress'
				defaultValue={inspection?.factoryAddress}
				placeholder='Yueqing'
			/>
		</>
	)
}
