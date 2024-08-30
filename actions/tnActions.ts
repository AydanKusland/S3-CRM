'use server'

import { TN } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import prisma from 'utils/db'

export async function createTN(
	previousState: null | string | number,
	formData: FormData
) {
	const data = {
		number: Number(formData.get('number') as string),
		name: formData.get('name') as string,
		RTN: formData.get('RTN') as string,
		reportEngineer: formData.get('reportEngineer') as string,
		manager: {
			connect: {
				fullName: 'Тугов Сергей'
			}
		}
	}

	try {
		const newTN = await prisma.tN.create({ data: data })
		revalidatePath('settings/TN')
		return newTN.number
	} catch (error) {
		console.log(error)
		return 'error from createTN server action'
	}
}

export async function getUserTN(userFullName: string): Promise<TN[] | null> {
	try {
		const TN = await prisma.user.findUnique({
			include: { TN: true },
			where: {
				fullName: userFullName
			}
		})
		// console.log(TN)
		if (TN?.TN) return TN?.TN
		return null
	} catch (error) {
		console.log(error)
		return null
	}
}
