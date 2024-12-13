'use server'

import prisma from '@/prisma/db'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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
export async function editFactory(
	name: string,
	formData: FormData
): Promise<'Произошла ошибка во время редактирования поставщика!'> {
	const addNewTN = formData.get('TN') as string

	let data: Prisma.FactoryUpdateInput = {
		name: formData.get('name') as string,
		province: formData.get('province') as string,
		city: formData.get('city') as string
	}

	if (addNewTN !== '')
		data = {
			...data,
			TN: {
				connect: { name: addNewTN }
			}
		}

	console.log(data)

	try {
		const newFactory = await prisma.factory.update({
			where: { name },
			data
		})
		revalidatePath('/factories')
		revalidatePath(`/factories/${encodeURIComponent(data.name)}`)
		revalidatePath(`/factories/${encodeURIComponent(name)}`)
		// return newFactory.name
	} catch (error) {
		console.log(error)
		return 'Произошла ошибка во время редактирования поставщика!'
	}
	redirect(`/factories/${encodeURIComponent(data.name)}`)
}

type FactoryWithTNNameType = Prisma.FactoryCreateInput & {
	TN: { name: string; number: number }[]
}
export async function getFactory(
	name: string
): Promise<FactoryWithTNNameType | 'Не удалось загрузить завод'> {
	try {
		const factory: FactoryWithTNNameType | null =
			await prisma.factory.findUnique({
				where: { name },
				include: {
					TN: {
						select: { name: true, number: true }
					}
				}
			})
		if (factory) return factory
		return 'Не удалось загрузить завод'
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

export async function disconnectTNfromFactory({
	TN_number: number,
	factory
}: {
	TN_number: number
	factory: string
}) {
	try {
		await prisma.factory.update({
			where: {
				name: factory
			},
			data: {
				TN: {
					disconnect: {
						number
					}
				}
			}
		})
		revalidatePath('/factories')
		revalidatePath(`/factories/${factory}`)
		return { TN_number: 0, factory: 'ТН удалено!' }
	} catch (error) {
		console.log(error)
		return { TN_number: number, factory: 'Не удалось удалить ТН!' }
	}
}
