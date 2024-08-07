import { InspectionType } from 'utils/types'
import { TovarnoeNapravlenieInput } from '../input fields/TovarnoeNapravlenieInput'
import { FactoryNameInput } from '../input fields/FactoryNameInput'
import { FactoryAddress } from '../input fields/FactoryAddress'

export const CreateAttestationForm = ({
	inspection
}: {
	inspection?: InspectionType
}) => {
	return (
		<>
			{/* Товарное направление */}
			<TovarnoeNapravlenieInput TN={inspection?.tovarnoeNapravlenie} />
			{/* Название завода */}
			<FactoryNameInput
				inspectionTypeIsInspection={false}
				factoryName={inspection?.factoryShortName}
			/>
			{/* Адрес завода */}
			<FactoryAddress address={inspection?.factoryAddress} />
		</>
	)
}
