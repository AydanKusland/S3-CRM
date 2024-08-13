import { inspectionMode } from 'utils/types'

const factories = ['Xianxing', 'UTL', 'Huajia']

export const FactoryNameInput = ({
	factoryName,
	inspectionTypeIsInspection
}: {
	factoryName?: string
	inspectionTypeIsInspection: boolean
}) => {
	if (inspectionTypeIsInspection) {
		return (
			<select
				name='factoryShortName'
				className='rounded-none'
				defaultValue={factoryName}
			>
				{factories.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		)
	} else
		return (
			<input
				required
				name='factoryShortName'
				className='rounded-none'
				defaultValue={factoryName}
				placeholder='Название завода'
			/>
		)
}
