'use client'

import { debounce } from '@/utils/helpers'
import styled from 'styled-components'
import { InspectionTypeWithId } from 'utils/types'

export const CommentInput = ({
	inspection
}: {
	inspection?: InspectionTypeWithId
}) => {
	return (
		<Textarea
			rows={1}
			title={inspection?.commentary}
			className='grow-[3] rounded-none resize-none hover:resize-y min-h-[30px]'
			name='commentary'
			placeholder='комментарий'
			defaultValue={inspection?.commentary}
			autoComplete='on'
			onChange={debounce(inspection)}
		/>
	)
}

const Textarea = styled.textarea`
	&::-webkit-scrollbar {
		width: 7px;
	}
	&::-webkit-scrollbar-corner {
		background-color: var(--myBrown);
	}
`
