'use server'

import { InspectionType } from 'utils/types'

export async function createInspection(inspection: InspectionType) {
	console.log(inspection)
}
