import { createInspectionAction } from 'actions/inspectionActions'
import { MainForm } from './forms/MainForm'
import DateRangePickerComponent from './ui/DateRangePicker'
import SubmitButton from './forms/SubmitButton'

function CreateInspection() {
	return (
		<form
			action={createInspectionAction}
			className='py-4 border-y-2 border-cyan-500 grid'
		>
			<div className='flex flex-wrap gap-y-2 justify-center'>
				{/* Даты */}
				<DateRangePickerComponent inspectionDate={[new Date(), new Date()]} />
				<MainForm />
				<SubmitButton />
			</div>
		</form>
	)
}
export default CreateInspection
