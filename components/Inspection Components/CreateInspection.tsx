import { createInspectionAction } from 'actions/inspectionActions'
import { MainForm } from './forms/MainForm'
import DateRangePickerComponent from '../ui/DateRangePicker'
import SubmitButton from './forms/SubmitButton'

function CreateInspection() {
	return (
		<form
			action={createInspectionAction}
			className='py-3 border-y-2 border-my-darkerGreen hover:py-14 hover:my-10 transition-all duration-700'
		>
			{/* <div className='flex flex-wrap gap-y-2 justify-center'> */}
			<div className='grid relative md:px-4 grid-cols-2 md:gap-y-3 md:grid-cols-4 lg:grid-cols-5 max-w-[1940px] md:mx-auto'>
				{/* Даты */}
				<DateRangePickerComponent inspectionDate={[new Date(), new Date()]} />
				<MainForm />
				<div className='absolute left-1/2 -bottom-8 2xl:-right-4 2xl:top-1/2 2xl:-translate-y-1/2 grid place-items-center'>
					<SubmitButton />
				</div>
			</div>
		</form>
	)
}
export default CreateInspection
