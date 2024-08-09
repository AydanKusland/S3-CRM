import { InspectionType } from './types'

export const changeDateFormatToDDMMYY = (date: Date): string =>
	date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'numeric',
		year: '2-digit'
	})

export const parseDateStringFromDDMMYY_DDMMYYToDateArrayOfTwoMMDDYY = (
	date: string
): Date[] => {
	const [firstDate, secondDate] = date.split(' - ')
	const standardizedStartDateString = `${firstDate.charAt(3)}${firstDate.charAt(
		4
	)}.${firstDate.charAt(0)}${firstDate.charAt(1)}.${firstDate.charAt(
		6
	)}${firstDate.charAt(7)}`

	const standardizedEndDateString = `${secondDate.charAt(3)}${secondDate.charAt(
		4
	)}.${secondDate.charAt(0)}${secondDate.charAt(1)}.${secondDate.charAt(
		6
	)}${secondDate.charAt(7)}`
	return [
		new Date(standardizedStartDateString),
		new Date(standardizedEndDateString)
	]
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
			const formattedDateA =
				parseDateStringFromDDMMYY_DDMMYYToDateArrayOfTwoMMDDYY(a.date)[0]
			const formattedDateB =
				parseDateStringFromDDMMYY_DDMMYYToDateArrayOfTwoMMDDYY(b.date)[0]

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
