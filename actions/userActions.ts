'use server'

import prisma from '@/prisma/db'
import { UserType } from '@/utils/types'
import bcrypt from 'bcrypt'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const getAllUsers = async () => {
	try {
		const users = await prisma.user.findMany({
			select: {
				fullName: true,
				email: true,
				userRights: true,
				TN: {
					select: {
						name: true,
						number: true
					}
				}
			}
		})
		return users.map(user => {
			const TN = user.TN.map(tn => {
				return { number: tn.number, name: tn.name }
			})
			return { ...user, TN }
		})
	} catch (error) {
		console.log(error)
		return null
	}
}
export const getUser = async (
	fullName: string
): Promise<UserType | 'User not found'> => {
	try {
		const user: UserType | null = await prisma.user.findUnique({
			where: { fullName },
			select: {
				fullName: true,
				email: true,
				userRights: true,
				TN: {
					select: {
						name: true,
						number: true
					}
				}
			}
		})
		if (user) return user
	} catch (error) {
		console.log(error)
	}
	return 'User not found'
}

export const getAllUserNames = async (): Promise<
	string[] | 'Request Failed'
> => {
	try {
		const users = await prisma.user.findMany({
			select: {
				fullName: true
			}
		})
		const userNames = users.map(user => user.fullName)
		return userNames
	} catch (error) {
		console.log(error)
		return 'Request Failed'
	}
}

export const createUser = async (
	prev: {
		status: string
		fullName: string
	},
	formData: FormData
): Promise<{
	status: 'success!' | 'Create User Failed!'
	fullName: string
}> => {
	try {
		const newUser = await prisma.user.create({
			data: {
				fullName: formData.get('fullName') as string,
				// hashedPassword: await bcrypt.hash(password, 10),
				hashedPassword: await bcrypt.hash('123', 10),
				email: formData.get('email') as string
			}
		})
		revalidatePath('/users')
		return { status: 'success!', fullName: newUser.fullName }
	} catch (error) {
		console.log(error)
		return { status: 'Create User Failed!', fullName: '' }
	}
}

export const deleteUser = async (
	prev: string
): Promise<'Пользователь удалён!' | 'Удаление пользователя провалилось!'> => {
	try {
		await prisma.user.delete({
			where: {
				fullName: prev
			}
		})
		return 'Пользователь удалён!'
	} catch (error) {
		console.log(error)
		return 'Удаление пользователя провалилось!'
	}
}
