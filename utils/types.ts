export interface InspectionType {
	creatorId: string
	startDate: string
	endDate: string
	inspectionType: string
	province: string
	recommendedExecutor: string
	factoryShortName: string
	TN: string
	orderNumber: string
	orderCost: string
	commentary: string
	factoryAddress: string
	managerKP: string
	RTN: string
	reportReceived: boolean
	year_week: string
}

export interface InspectionTypeWithId extends InspectionType {
	id: string
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

export type TN = {
	number: number
	name: string
	RTN: string
	reportEngineer: string
	// factories?: [FactoryType]
	manager: Partial<UserType>[]
}

export type UserType = {
	fullName: string
	email: string
	TN: Partial<TN>[]
	userRights: string[]
}

export const inspectionMode = [
	'Проверка заказа',
	'Аттестация завода',
	'Тестирование образцов',
	'Посещение выставки',
	'Офисная работа/отчёты',
	'Окно',
	'Выходной!'
]

export const defaultInspectionObject = {
	creatorId: '',
	startDate: '',
	endDate: '',
	inspectionType: inspectionMode[0],
	province: '',
	recommendedExecutor: '',
	factoryShortName: '',
	TN: '',
	orderNumber: '',
	orderCost: '',
	commentary: '',
	factoryAddress: '',
	managerKP: '-',
	RTN: '-',
	reportReceived: false,
	year_week: '2025_01'
}
