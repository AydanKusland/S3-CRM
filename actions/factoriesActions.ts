'use server'

import prisma from '@/prisma/db'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export async function createFactory(
	prev: string,
	formData: FormData
): Promise<string | 'Произошла ошибка во время создания поставщика!'> {
	const data = {
		name: formData.get('name') as string,
		province: formData.get('province') as string,
		city: formData.get('city') as string,
		TN: {
			connect: { name: formData.get('TN') as string }
		}
	}

	try {
		const newFactory = await prisma.factory.create({ data })
		revalidatePath('/factories')
		return newFactory.name
	} catch (error) {
		console.log(error)
		return 'Произошла ошибка во время создания поставщика!'
	}
}

type FactoryWithTNNameType = Prisma.FactoryCreateInput & {
	TN: { name: string }[]
}
export async function getFactory(
	name: string
): Promise<FactoryWithTNNameType | string> {
	try {
		const factory: FactoryWithTNNameType | null =
			await prisma.factory.findUnique({
				where: { name },
				include: {
					TN: {
						select: { name: true }
					}
				}
			})
		if (factory) return factory
		return 'Завод не найден'
	} catch (error) {
		console.log(error)
		return 'Не удалось загрузить завод'
	}
}

export async function getUserFactories(fullName: string) {
	try {
		const myFactories = await prisma.factory.findMany({
			include: {
				TN: {
					where: {
						manager: {
							some: { fullName }
						}
					},
					select: { name: true }
				}
			}
		})
		return myFactories
	} catch (error) {
		console.log(error)
		return 'Не удалось загрузить заводы'
	}
}
