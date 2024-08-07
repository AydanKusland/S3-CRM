import { InspectorsInput } from '../input fields/InspectorsInput'
import { CommentInput } from '../input fields/CommentInput'
import { ProvinceInput } from '../input fields/ProvinceInput'
import { InspectionTypeSelect } from '../input fields/InspectionTypeSelect'
import { InspectionType } from 'utils/types'

export const MainForm = ({ inspection }: { inspection?: InspectionType }) => {
	return (
		<>
			{/* Провинция */}
			<ProvinceInput province={inspection?.province} />
			{/* Тип работ */}
			<InspectionTypeSelect inspection={inspection} />
			{/* Комментарий */}
			<CommentInput comment={inspection?.commentary} />
			{/* Исполнитель или Рекомендуемый исполнитель */}
			<InspectorsInput inspector={inspection?.recommendedExecutor} />
		</>
	)
}
