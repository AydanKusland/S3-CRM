import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'
import { InspectionType } from 'utils/types'

export const CreateAttestationForm = ({
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
				required
			>
				{tovarnieNapravlenia.map(option => (
					<option
						key={option}
						defaultValue={inspection?.tovarnoeNapravlenie}
						value={option}
					>
						{option}
					</option>
				))}
			</select>
			{/* Название завода */}
			<input
				name='factoryShortName'
				className='rounded-none'
				placeholder='Название завода'
				defaultValue={inspection?.factoryShortName}
			/>
			{/* Адрес завода */}
			<input
				className='rounded-none'
				type='text'
				name='factoryAddress'
				defaultValue={inspection?.factoryAddress}
				placeholder='Адрес завода'
			/>
		</>
	)
}
