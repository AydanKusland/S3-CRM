'use server'

import prisma from './db'

export const getAllUsers = async () => {
	try {
		const users = await prisma.user.findMany({})
		return users
	} catch (error) {
		console.log(error)
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
