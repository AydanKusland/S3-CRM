'use server'

import { revalidatePath } from 'next/cache'
import prisma from './db'
import { extractDataFromFormData } from './helpers'
import { InspectionType, InspectionTypeWithId } from './types'

export async function createInspectionAction(
	formData: FormData
): Promise<InspectionTypeWithId | null> {
	const data: InspectionType = extractDataFromFormData(formData)

	try {
		const inspection: InspectionTypeWithId = await prisma.inspection.create({
			data
		})
		revalidatePath(`/inspections/${inspection.year_week}`)

		return inspection
	} catch (error) {
		console.log(error)
		return null
	}
}

export async function deleteInspectionAction(
	previousState: number,
	id: string
) {
	try {
		const deletedInspection = await prisma.inspection.delete({
			where: {
				id
			}
		})
		revalidatePath(`/inspections/${deletedInspection.year_week}`)
		// return deletedInspection
		return previousState + 1
	} catch (error) {
		console.log(error)
		return previousState + 1
	}
}

export async function editInspectionAction(
	id: string,
	args: Partial<InspectionType>
): Promise<InspectionTypeWithId | null> {
	try {
		const updatedInspection = await prisma.inspection.update({
			where: {
				id
			},
			data: { ...args }
		})
		revalidatePath(`/inspections/${updatedInspection.year_week}`)
		return updatedInspection
	} catch (error) {
		console.log(error)
		return null
	}
}
