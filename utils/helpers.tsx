import {
	defaultInspectionObject,
	InspectionType,
	InspectionTypeWithId
} from './types'

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
	inspections: InspectionTypeWithId[]
): InspectionTypeWithId[] => {
	return (inspections =
		inspections.toSorted((a: InspectionTypeWithId, b: InspectionTypeWithId) =>
			a.recommendedExecutor.localeCompare(b.recommendedExecutor)
		) || [])
}

export const sortInspectionsByExecutorAndDate = (
	inspections: InspectionTypeWithId[]
): InspectionTypeWithId[] => {
	let sortedByExecutor = sortInspectionsByExecutor(inspections)

	return sortedByExecutor.toSorted(
		(a: InspectionTypeWithId, b: InspectionTypeWithId) => {
			if (
				a.recommendedExecutor === b.recommendedExecutor &&
				a.province === b.province
			) {
				const formattedDateA = parseDateStringFromDDMMYYToDateStringMMDDYY(
					a.startDate
				)
				const formattedDateB = parseDateStringFromDDMMYYToDateStringMMDDYY(
					b.startDate
				)

				return formattedDateA.valueOf() - formattedDateB.valueOf()
			} else return 0
		}
	)
}

export const makeProvinceList = (
	inspections: InspectionTypeWithId[]
): string[] => {
	return Array.from(
		new Set(
			inspections.reduce((acc: string[], cur) => [...acc, cur.province], [])
		)
	)
}

export function changeDateByOneWeek(
	initialDate: Date,
	plusORminus: 'plus' | 'minus'
): Date {
	const oneWeekInMs = 1000 * 60 * 60 * 24 * 7
	if (plusORminus === 'plus')
		return new Date(initialDate.valueOf() + oneWeekInMs)
	if (plusORminus === 'minus')
		return new Date(initialDate.valueOf() - oneWeekInMs)
	return initialDate
}

export function extractDataFromFormData(formData: FormData): InspectionType {
	const createInspectionData: InspectionType = defaultInspectionObject

	// Dealing with dates
	const date: string = formData.get('date') as string
	const [startDate, endDate] = date.split(' - ')
	createInspectionData.startDate = startDate
	createInspectionData.endDate = endDate

	// Everything else

	const fields: Array<keyof InspectionType> = [
		'inspectionType',
		'province',
		'recommendedExecutor',
		'factoryShortName',
		'tovarnoeNapravlenie',
		'orderNumber',
		'orderCost',
		'commentary',
		'factoryAddress',
		'reportReceived'
	]

	fields.forEach((field: keyof InspectionType): void => {
		const value = formData.get(field)
		if (!(value instanceof File))
			createInspectionData[field] = value === null ? '' : value
	})

	return createInspectionData
}
