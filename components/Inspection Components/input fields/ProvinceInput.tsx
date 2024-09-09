// server component

const provinces = ['Zhejiang', 'Guangdong', 'Fujiang', 'Shanghai']

export const ProvinceInput = ({ province }: { province?: string }) => {
	const visibility = province && 'hidden'
	return (
		<select
			required
			className={`grow rounded-none ${visibility}`}
			name='province'
			defaultValue={province}
		>
			{provinces.map(province => (
				<option key={province}>{province}</option>
			))}
		</select>
	)
}
