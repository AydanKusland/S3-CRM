import { getWeek } from 'date-fns'
import { redirect } from 'next/navigation'

export default function InspectionsPage() {
	const yearAndWeek = `${new Date().getFullYear()}-${getWeek(new Date())}`
	return redirect(`/inspections/${yearAndWeek}`)
}
