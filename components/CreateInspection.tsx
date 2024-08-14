import { createInspectionAction } from 'utils/actions'
import { MainForm } from './forms/MainForm'
import DateRangePickerComponent from './ui/DateRangePicker'
import SubmitButton from './forms/SubmitButton'

function CreateInspection() {
	return (
		<form action={createInspectionAction} className='p-3 border-2 grid'>
			<div className='flex flex-wrap gap-y-2 '>
				{/* Даты */}
				<DateRangePickerComponent inspectionDate={[new Date(), new Date()]} />
				<MainForm />
				<SubmitButton />
			</div>
		</form>
	)
}
export default CreateInspection
