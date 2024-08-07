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
