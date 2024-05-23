export type InspectionType = {
	// id: string
	date: string
	inspectionType: string
	tovarnoeNapravlenie?: string
	// inspectionDuration: Number
	factoryShortName?: string
	// creatorId: string
	productInfo?: string
	orderCost?: string
	commentary?: string
	factoryAddress?: string
	recommendedExecutor?: employeeType
}

export type FactoryType = {
	id: string
	factoryFullName: string
	factoryShortName: string
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
