'use server'

import { Prisma, TN } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import prisma from '@/prisma/db'
import { redirect } from 'next/navigation'
import { BOSS_NAME } from '@/utils/CONSTANTS'

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
			connect: [
				{ fullName: formData.get('manager') as string },
				{ fullName: BOSS_NAME }
			]
		}
	}

	try {
		const newTN = await prisma.tN.create({ data })
		revalidatePath('/settings/TN')
		return newTN.number
	} catch (error) {
		console.log(error)
		return 'Произошла ошибка во время создания товарного направления!'
	}
}

export type UserTN_Names = {
	name: string
	number: number
	manager: {
		fullName: string
	}[]
}
export async function getUserTN(
	fullName: string
): Promise<UserTN_Names[] | 'Не удалось получить ТН'> {
	try {
		const TN: UserTN_Names[] = await prisma.tN.findMany({
			select: {
				manager: {
					where: { fullName },
					select: {
						fullName: true
					}
				},
				name: true,
				number: true
			}
		})
		return TN
	} catch (error) {
		console.log(error)
		return 'Не удалось получить ТН'
	}
}

export type TN_WithManagerName = TN & { manager: { fullName: string }[] }
export async function getTNWithManagerName(
	number: number
): Promise<TN_WithManagerName | 'Request Failed'> {
	try {
		const TN: TN_WithManagerName | null = await prisma.tN.findUnique({
			where: { number },
			include: {
				manager: {
					select: {
						fullName: true
					}
				}
			}
		})
		if (TN) return TN
		else return 'Request Failed'
	} catch (error) {
		console.log(error)
		return 'Request Failed'
	}
}

export async function editTNAction(number: number, formData: FormData) {
	const data: Prisma.TNUpdateInput = {
		number: Number(formData.get('number') as string),
		name: formData.get('name') as string,
		RTN: formData.get('RTN') as string,
		reportEngineer: formData.get('reportEngineer') as string,
		manager: {
			connect: {
				fullName: formData.get('manager') as string
			}
		}
	}

	try {
		const newTN: TN = await prisma.tN.update({
			where: {
				number
			},
			data
		})
		revalidatePath(`/settings/TN/${newTN.number}`)
		revalidatePath(`/settings/TN/${number}`)
		revalidatePath('/settings/TN')
	} catch (error) {
		console.log(error)
		return 400
	}
	redirect(`/settings/TN/${data.number}`)
}

type DisconnectManagerObject = {
	fullName: string
	number: number
}

export async function disconnectManagerFromTN({
	fullName,
	number
}: DisconnectManagerObject): Promise<DisconnectManagerObject> {
	try {
		await prisma.tN.update({
			where: {
				number
			},
			data: {
				manager: {
					disconnect: {
						fullName
					}
				}
			}
		})
		revalidatePath(`/settings/TN/${number}`)
		revalidatePath('/settings/TN')
		return { fullName: 'success!', number }
	} catch (error) {
		console.log(error)
		return { fullName: 'failed disconnecting manager!', number }
	}
}
