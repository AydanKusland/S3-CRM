import * as z from 'zod'

export type InspectionType = {
	id: string
	createdAt: Date
	updatedAt: Date
	date: string
	inspectionType: string
	tovarnoeNapravlenie: string
	factoryShortName: string
	productInfo: string
	orderCost: string
	commentary: string
	factoryAddress: string
	recommendedExecutor: string
	inspectionDuration: number
	creatorId: string
	managerKP: string
	RTN: string
	reportReceived: Boolean
}

export type FactoryType = {
	id: string
	factoryFullName: string
	factoryShortName: string
	province: string
	city: string // one or many?
	baiduCoords?: string
	transportation?: string
	department: string // one or many?
	factoryManagerName?: string
	factoryManagerContact?: string
}

export type employeeType = {
	id: string
	name: string
	outsource: Boolean
	inCompanyFrom?: Date
}

export enum inspectionMode {
	Attestation = 'Посещение завода',
	Inspection = 'Проверка заказа',
	Fair = 'Выставка',
	FieldTest = 'Тестирование образцов',
	Office = 'Офисная работа'
}

export const createAndEditInspectionSchema = z.object({
	date: z.string().min(5, { message: 'something is wrong with a date' }),
	province: z.string().min(5),
	factoryAddress: z.string().min(5),
	recommendedExecutor: z.string().min(2)
})

export type CreateAndEditInspectionType = z.infer<
	typeof createAndEditInspectionSchema
>
