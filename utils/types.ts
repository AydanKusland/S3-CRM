export interface BasicInspectionType {
	creatorId: string
	date: string
	inspectionType: inspectionMode | string
	province: string
	recommendedExecutor: string
}

export interface InspectionType extends BasicInspectionType {
	id: string
	factoryShortName?: string
	tovarnoeNapravlenie?: string
	orderNumber?: string
	orderCost?: string
	commentary?: string
	factoryAddress?: string
	managerKP?: string
	RTN?: string
	reportReceived?: Boolean
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

export enum inspectionMode {
	Inspection = 'Проверка заказа',
	Attestation = 'Посещение завода',
	FieldTest = 'Тестирование образцов',
	Fair = 'Посещение выставки',
	Office = 'Офисная работа, написание отчётов',
	Window = 'Окно',
	Rest = 'Выходной!'
}
