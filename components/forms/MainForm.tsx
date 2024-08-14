import { InspectorsInput } from '../input fields/InspectorsInput'
import { CommentInput } from '../input fields/CommentInput'
import { ProvinceInput } from '../input fields/ProvinceInput'
import { InspectionTypeSelect } from '../input fields/InspectionTypeSelect'
import { InspectionTypeWithId } from 'utils/types'

export const MainForm = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	return (
		<>
			{/* Провинция */}
			<ProvinceInput province={inspection?.province} />
			{/* Тип работ */}
			<InspectionTypeSelect inspection={inspection} />
			{/* Комментарий */}
			<CommentInput inspection={inspection} />
			{/* Исполнитель или Рекомендуемый исполнитель */}
			<InspectorsInput inspection={inspection} />
		</>
	)
}
