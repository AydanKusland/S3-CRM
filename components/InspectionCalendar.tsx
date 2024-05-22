function InspectionCalendar() {
	return (
		<div className='flex justify-center gap-4 p-1 capitalize border-2'>
			<button>Previous Week</button>
			{/* current week should be highlighted */}
			<button>Current Week</button>
			<button>Next Week</button>
		</div>
	)
}
export default InspectionCalendar
