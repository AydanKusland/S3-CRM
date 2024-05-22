export type InspectionType = {
	id: string
	date: string
	inspectionDuration: Number
	inspectionType: inspectionMode
	factory: FactoryType
	creatorId: string
	orderNo?: string
	orderCost?: string
	taskDescription?: string
	recommendedInspector?: employeeType
	recommendedInspector2?: employeeType
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
