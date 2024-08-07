'use server'

import prisma from './db'
import { BasicInspectionType, InspectionType } from './types'

export async function createInspectionAction(
	inspectionArgs: BasicInspectionType
): Promise<InspectionType | null> {
	try {
		const inspection: InspectionType = await prisma.inspection.create({
			data: {
				...inspectionArgs,
				creatorId: 'apple',
				managerKP: 'Tugov',
				RTN: 'Golubcov',
				reportReceived: true
			}
		})
		return inspection
	} catch (error) {
		console.log(error)
		return null
	}
}

export async function getAllInspectionsAction(): Promise<{
	inspections: InspectionType[]
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
): Promise<InspectionType | null> {
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
	time
}: {
	id: string
	time: string
}): Promise<InspectionType | null> {
	try {
		const updatedInspection = await prisma.inspection.update({
			where: {
				id
			},
			data: {
				date: time
			}
		})
		return updatedInspection
	} catch (error) {
		console.log(error)
		return null
	}
}
