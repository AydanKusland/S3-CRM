import DeleteButton from '@/components/DeleteButton'

async function page() {
	return (
		<form className='max-w-fit mx-auto pt-10'>
			<div className='grid grid-cols-2 gap-6 mb-1'>
				<label htmlFor='number' className='justify-self-end'>
					Номер товарного направления
				</label>
				<input required type='number' name='number' id='number' />
			</div>
			<div className='grid grid-cols-2 gap-6 mb-1'>
				<label htmlFor='name' className='justify-self-end'>
					Название товарного направления
				</label>
				<input type='text' name='number' id='name' required />
			</div>
			<div className='grid grid-cols-2 gap-6 mb-1'>
				<label htmlFor='RTN' className='justify-self-end'>
					РТН
				</label>
				<input type='text' name='RTN' id='RTN' required />
			</div>
			<div className='grid grid-cols-2 gap-6 mb-1'>
				<label htmlFor='reportEngineer' className='justify-self-end'>
					Инженер ЦО
				</label>
				<input type='text' name='reportEngineer' id='reportEngineer' required />
			</div>
			<div className='grid grid-cols-2 gap-6 mb-1'>
				<label htmlFor='manager' className='justify-self-end'>
					Менеджер КП
				</label>
				<input type='text' name='manager' id='manager' required />
			</div>
		</form>
	)
}

export default page
