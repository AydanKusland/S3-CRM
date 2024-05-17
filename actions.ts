'use server'

import { InspectionType } from 'utils/types'

export async function name(inspection: InspectionType) {
	console.log(inspection)
}
