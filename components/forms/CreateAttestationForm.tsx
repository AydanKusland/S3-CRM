import { InspectionTypeWithId } from 'utils/types'
import { TovarnoeNapravlenieInput } from '../input fields/TovarnoeNapravlenieInput'
import { FactoryNameInput } from '../input fields/FactoryNameInput'
import { FactoryAddress } from '../input fields/FactoryAddress'

export const CreateAttestationForm = ({
	inspection,
	inspectionType
}: {
	inspection?: InspectionTypeWithId
	inspectionType: string
}) => {
	return (
		<>
			{/* Товарное направление */}
			<TovarnoeNapravlenieInput inspection={inspection} />
			{/* Название завода */}
			<FactoryNameInput
				inspection={inspection}
				inspectionType={inspectionType}
			/>
			{/* Адрес завода */}
			<FactoryAddress inspection={inspection} />
		</>
	)
}
