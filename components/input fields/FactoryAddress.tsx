export const FactoryAddress = ({ address }: { address?: string }) => {
	return (
		<input
			required
			className='rounded-none'
			type='text'
			name='factoryAddress'
			defaultValue={address}
			placeholder='Адрес завода'
		/>
	)
}
