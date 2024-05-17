function InspectionCalendar() {
	return (
		<div className='flex justify-center gap-4'>
			<button>prev week</button>
			{/* current week should be highlighted */}
			<div>current week</div>
			<button>next week</button>
		</div>
	)
}
export default InspectionCalendar
