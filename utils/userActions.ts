'use server'

import prisma from './db'
import { CreateAndEditUserType } from './types'

export const getAllUsers = async () => {
	try {
		const users = await prisma.user.findMany({})
		return users
	} catch (error) {
		console.log(error)
	}
}

export const createUser = async (userArgs: CreateAndEditUserType) => {
	try {
		const user = await prisma.user.create({ data: userArgs })
		return user
	} catch (error) {
		console.log(error)
	}
}
