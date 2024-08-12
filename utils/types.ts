// export interface BasicInspectionType {
// creatorId: string
// startDate: string
// endDate: string
// inspectionType: inspectionMode
// province: string
// recommendedExecutor: string
// }

export interface InspectionType {
	creatorId: string
	startDate: string
	endDate: string
	inspectionType: string
	province: string
	recommendedExecutor: string
	factoryShortName: string
	tovarnoeNapravlenie: string
	orderNumber: string
	orderCost: string
	commentary: string
	factoryAddress: string
	managerKP: string
	RTN: string
	reportReceived: boolean | null
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

export interface UserInterface {
	id: string
	fullName: string
	shortName: string
	tovarnoeNapravlenie: string[]
	factories: FactoryType[]
	userRights: string[]
}

export const inspectionMode = [
	'Проверка заказа',
	'Посещение завода',
	'Тестирование образцов',
	'Посещение выставки',
	'Офисная работа, написание отчётов',
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
	tovarnoeNapravlenie: '',
	orderNumber: '',
	orderCost: '',
	commentary: '',
	factoryAddress: '',
	managerKP: '',
	RTN: '',
	reportReceived: null
}
