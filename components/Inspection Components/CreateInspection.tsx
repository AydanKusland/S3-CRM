import { createInspectionAction } from 'actions/inspectionActions'
import { MainForm } from './forms/MainForm'
import DateRangePickerComponent from '../ui/DateRangePicker'
import SubmitButton from './forms/SubmitButton'

function CreateInspection() {
	return (
		<form
			action={createInspectionAction}
			className='relative py-3 border-y-2 border-my-darkerGreen hover:py-8 transition-all duration-1000 overflow-hidden'
		>
			<div className='grid relative grid-cols-3 md:px-4 md:gap-y-px md:mx-auto md:grid-cols-5 max-w-[1800px] '>
				<DateRangePickerComponent inspectionDate={[new Date(), new Date()]} />
				<MainForm />
				<div className='grid place-items-center bottom-1 md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-7 2xl:top-1/2 2xl:-translate-y-1/2 2xl:left-full'>
					<SubmitButton />
				</div>
			</div>
		</form>
	)
}
export default CreateInspection
