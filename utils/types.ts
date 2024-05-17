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
	factoryName: string
	city: string
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
	Attestation = 'Аттестация',
	Inspection = 'Проверка заказа',
	Fair = 'Выставка',
	FieldTest = 'Тестирование образцов'
}
