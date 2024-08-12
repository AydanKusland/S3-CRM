import { InspectionType } from './types'

export const changeDateFormatToDDMMYY = (date: Date): string =>
	date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'numeric',
		year: '2-digit'
	})

export const parseDateStringFromDDMMYYToDateStringMMDDYY = (
	date: string
): Date => {
	const standardizedStartDateString = `${date.charAt(3)}${date.charAt(
		4
	)}.${date.charAt(0)}${date.charAt(1)}.${date.charAt(6)}${date.charAt(7)}`

	return new Date(standardizedStartDateString)
}

const sortInspectionsByExecutor = (
	inspections: InspectionType[]
): InspectionType[] => {
	return (inspections =
		inspections.toSorted((a: InspectionType, b: InspectionType) =>
			a.recommendedExecutor.localeCompare(b.recommendedExecutor)
		) || [])
}

export const sortInspectionsByExecutorAndDate = (
	inspections: InspectionType[]
): InspectionType[] => {
	let sortedByExecutor = sortInspectionsByExecutor(inspections)

	return sortedByExecutor.toSorted((a: InspectionType, b: InspectionType) => {
		if (
			a.recommendedExecutor === b.recommendedExecutor &&
			a.province === b.province
		) {
			const formattedDateA = parseDateStringFromDDMMYYToDateStringMMDDYY(
				a.startDate
			)
			const formattedDateB = parseDateStringFromDDMMYYToDateStringMMDDYY(
				b.endDate
			)

			return formattedDateA.valueOf() - formattedDateB.valueOf()
		} else return 0
	})
}

export const makeProvinceList = (inspections: InspectionType[]): string[] => {
	return Array.from(
		new Set(
			inspections.reduce((acc: string[], cur) => [...acc, cur.province], [])
		)
	)
}

export function changeDateByOneWeek(
	initialDate: Date,
	plusORminus: string
): Date {
	const oneWeekInMs = 1000 * 60 * 60 * 24 * 7
	if (plusORminus === 'plus')
		return new Date(initialDate.valueOf() + oneWeekInMs)
	if (plusORminus === 'minus')
		return new Date(initialDate.valueOf() - oneWeekInMs)
	return initialDate
}
