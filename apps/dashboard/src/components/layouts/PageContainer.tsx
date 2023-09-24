import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
	children: any
	title: string
}

export default function PageContainer({ children, title }: Props) {
	return (
		<Box className="page-content pt-4">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="page-title-box d-sm-flex align-items-center justify-content-between">
							<h4 className="mb-sm-0">{title}</h4>

							<div className="page-title-right">
								<ol className="breadcrumb m-0">
									<li className="breadcrumb-item">
										<a href="javascript: void(0);">Apps</a>
									</li>
									<li className="breadcrumb-item active">Calendar</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				{children}
			</div>
		</Box>
	)
}
