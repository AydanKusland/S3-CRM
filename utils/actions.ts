'use server'

import prisma from './db'
import {
	CreateAndEditInspectionType,
	InspectionType,
	createAndEditInspectionSchema
} from './types'

export async function createInspectionAction(
	inspectionArg: CreateAndEditInspectionType
): Promise<InspectionType | null> {
	try {
		createAndEditInspectionSchema.parse(inspectionArg)
		const inspection: InspectionType = await prisma.inspection.create({
			data: {
				...inspectionArg,
				inspectionDuration: 1,
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
