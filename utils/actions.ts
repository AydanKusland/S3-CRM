'use server'

import { revalidatePath } from 'next/cache'
import prisma from './db'
import { extractDataFromFormData } from './helpers'
import { InspectionType, InspectionTypeWithId } from './types'
import { cache } from 'react'

export async function createInspectionAction(
	formData: FormData
): Promise<InspectionTypeWithId | null> {
	const data: InspectionType = extractDataFromFormData(formData)

	try {
		const inspection: InspectionTypeWithId = await prisma.inspection.create({
			data
		})
		revalidatePath('/inspections')

		return inspection
	} catch (error) {
		console.log(error)
		return null
	}
}

export const getInspections = cache(
	async (): Promise<InspectionTypeWithId[]> => {
		try {
			const inspections = await prisma.inspection.findMany({})
			console.log('success loading all inspections!!!')
			return inspections
		} catch (error) {
			console.log(error)
			return []
		}
	}
)

export async function deleteInspectionAction(
	id: string
): Promise<InspectionTypeWithId | null> {
	try {
		const inspection = await prisma.inspection.delete({
			where: {
				id
			}
		})
		revalidatePath('/inspections')
		return inspection
	} catch (error) {
		console.log(error)
		return null
	}
}

export async function editInspectionAction(
	id: string,
	args: Partial<InspectionType>
): Promise<InspectionTypeWithId | null> {
	console.log(args)

	try {
		const updatedInspection = await prisma.inspection.update({
			where: {
				id
			},
			data: { ...args }
		})
		revalidatePath('/inspections')
		return updatedInspection
	} catch (error) {
		console.log(error)
		return null
	}
}
