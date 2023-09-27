import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
	color?: string
	Icon?: any
	heading?: string
	subHeading?: string
	value: string
	rightComponent?: any
}

export default function StatusCard({
	color,
	Icon,
	value,
	heading,
	subHeading,
	rightComponent,
}: Props) {
	return (
		<div className="card card-animate">
			<div className="card-body">
				<div className="d-flex align-items-center">
					{Icon && (
						<div className="avatar-sm flex-shrink-0">
							<Box
								backgroundColor={`${color || 'gray'}.100`}
								color={`${color || 'gray'}.500`}
								h="full"
								rounded="md"
								display={'flex'}
								justifyContent={'center'}
								alignItems={'center'}
								fontSize={'25px'}
								// className="avatar-title  rounded-2 fs-2"
							>
								<Icon />
							</Box>
						</div>
					)}
					<div className="flex-grow-1 overflow-hidden ms-3">
						<p className="text-uppercase fw-medium text-muted text-truncate mb-3">
							{heading}
						</p>
						<div className="d-flex align-items-center mb-3">
							<h4 className="fs-4 flex-grow-1 mb-0">
								<span className="counter-value" data-target="825">
									{value}
								</span>
							</h4>
							{rightComponent}
						</div>
						<p className="text-muted text-truncate mb-0">{subHeading}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
