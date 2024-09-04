'use server'

import prisma from '@/prisma/db'
import { UserType } from '@/utils/types'
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'

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

export const addUser = async (password: string) => {
	try {
		const newUser = await prisma.user.create({
			data: {
				fullName: 'Лашманкин Максим',
				hashedPassword: await bcrypt.hash(password, 10),
				email: 'hahaha@mail.com'
			}
		})
		return newUser
	} catch (error) {
		console.log(error)
		return null
	}
}

// type User = {
// 	argOne : string
// }

// export const createUser = async (userArgs : User) => {
// 	try {
// 		const user = await prisma.user.create({ data: userArgs })
// 		return user
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
