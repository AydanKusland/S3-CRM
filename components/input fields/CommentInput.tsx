export const CommentInput = ({ comment }: { comment?: string }) => {
	return (
		<input
			className='max-w-48 rounded-none'
			type='text'
			name='commentary'
			placeholder='комментарий'
			defaultValue={comment}
			autoComplete='on'
		/>
	)
}
