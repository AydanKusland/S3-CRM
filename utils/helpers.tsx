import { getWeek } from 'date-fns'
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

export function getPreviousOrNextWeek(
	currentWeek: string,
	prevOrNext: 'prev' | 'next'
): string {
	// argument format : "1990 46"
	let [year, week] = currentWeek.split(' ').map(value => Number.parseInt(value))
	if (prevOrNext === 'prev') {
		if (week > 1) week--
		else {
			year--
			week = 52
		}
	}
	if (prevOrNext === 'next') {
		if (week < 52) week++
		else {
			year++, (week = 1)
		}
	}
	return `${year.toString()} ${week.toString()}`
}

export function extractDataFromFormData(formData: FormData): InspectionType {
	const createInspectionData: InspectionType = defaultInspectionObject

	// Dealing with dates
	const date: string = formData.get('date') as string
	const [startDate, endDate] = date.split(' - ')
	// DDMMYY String Format
	createInspectionData.startDate = startDate
	createInspectionData.endDate = endDate
	// Week And Year
	const startDateInMMDDYY =
		parseDateStringFromDDMMYYToDateStringMMDDYY(startDate)
	const week = getWeek(new Date(startDateInMMDDYY)).toString()
	const year = new Date(startDateInMMDDYY).getFullYear().toString()
	createInspectionData.weekAndYear = [year, week]

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
		if (!(value instanceof File) && field !== 'weekAndYear')
			createInspectionData[field] = value === null ? '' : value
	})

	return createInspectionData
}

// export const debounce = (fn: Function) => {
// 	let timeout: NodeJS.Timeout
// 	return (e: React.ChangeEvent<HTMLInputElement>) => {
// 		clearTimeout(timeout)
// 		timeout = setTimeout(() => {
// 			fn(e)
// 		}, 1500)
// 	}
// }
