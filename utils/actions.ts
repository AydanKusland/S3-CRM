'use server'

import prisma from './db'
import { InspectionType, InspectionTypeWithId } from './types'

export async function createInspectionAction(
	data: InspectionType
): Promise<InspectionTypeWithId | null> {
	try {
		const inspection: InspectionTypeWithId = await prisma.inspection.create({
			data
		})
		return inspection
	} catch (error) {
		console.log(error)
		return null
	}
}

export async function getAllInspectionsAction(): Promise<{
	inspections: InspectionTypeWithId[]
}> {
	try {
		const inspections = await prisma.inspection.findMany({})
		console.log('success loading all inspections!!!')

		return { inspections }
	} catch (error) {
		console.log(error)
		return { inspections: [] }
	}
}

export async function deleteInspectionAction(
	id: string
): Promise<InspectionTypeWithId | null> {
	try {
		const inspection = await prisma.inspection.delete({
			where: {
				id
			}
		})
		return inspection
	} catch (error) {
		console.log(error)
		return null
	}
}
export async function editInspectionAction({
	id,
	startDate,
	endDate
}: {
	id: string
	startDate: string
	endDate: string
}): Promise<InspectionTypeWithId | null> {
	try {
		const updatedInspection = await prisma.inspection.update({
			where: {
				id
			},
			data: {
				startDate,
				endDate
			}
		})
		return updatedInspection
	} catch (error) {
		console.log(error)
		return null
	}
}
