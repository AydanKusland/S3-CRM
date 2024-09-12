// server component

import { PROVINCE_LIST } from '@/utils/CONSTANTS'

export const ProvinceInput = ({ province }: { province?: string }) => {
	const visibility = province && 'hidden'
	return (
		<select
			required
			className={`grow rounded-none ${visibility}`}
			name='province'
			defaultValue={province}
		>
			{PROVINCE_LIST.map(province => (
				<option key={province}>{province}</option>
			))}
		</select>
	)
}
