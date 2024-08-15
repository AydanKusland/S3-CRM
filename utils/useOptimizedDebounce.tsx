import { useMemo } from 'react'
import { editInspectionAction } from './actions'
import { InspectionTypeWithId } from './types'

export default function useOptimizedDebounce(
	inspection: InspectionTypeWithId | undefined
) {
	if (!inspection) return () => {}
	const debounce = () => {
		let timeout: NodeJS.Timeout
		return (
			e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
		): void => {
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				if (inspection) {
					const newProp = e.target.value as string
					editInspectionAction(inspection.id, {
						[e.target.name]: newProp
					})
				}
			}, 1500)
		}
	}

	const optimizedDebounce = useMemo(() => debounce(), [])

	return optimizedDebounce
}
