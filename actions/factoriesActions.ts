'use server'

import prisma from '@/prisma/db'
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

export async function getFactory(name: string) {}
