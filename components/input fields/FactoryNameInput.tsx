import { inspectionMode, InspectionTypeWithId } from 'utils/types'
import useOptimizedDebounce from 'utils/useOptimizedDebounce'

const factories = ['Xianxing', 'UTL', 'Huajia']

export const FactoryNameInput = ({
	inspection,
	inspectionType
}: {
	inspection?: InspectionTypeWithId
	inspectionType: string
}) => {
	const optimizedDebounce = useOptimizedDebounce(inspection)

	if (inspectionType === inspectionMode[0]) {
		return (
			<select
				name='factoryShortName'
				className='rounded-none'
				defaultValue={inspection?.factoryShortName}
				onChange={optimizedDebounce}
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
				defaultValue={inspection?.factoryShortName}
				placeholder='Название завода'
				onChange={optimizedDebounce}
			/>
		)
}
