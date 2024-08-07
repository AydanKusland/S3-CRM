import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'

export const TovarnoeNapravlenieInput = ({ TN }: { TN?: string }) => {
	return (
		<select
			name='tovarnoeNapravlenie'
			className='max-w-40 rounded-none pl-1 text-sm'
			defaultValue={TN}
			required
		>
			{tovarnieNapravlenia.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	)
}
