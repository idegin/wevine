import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'



export default function WButton(props: ButtonProps) {
	return (
		<Button
			bg="theme"
			color={'white'}
			_hover={{
				backgroundColor: 'theme_darker',
                color: 'theme'
			}}
			rounded='sm'
            {...props}
		>
			{props.children} 
		</Button>
	)
}
