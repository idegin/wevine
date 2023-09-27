import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
	children: any
	title: string
}

export default function PageContainer({ children, title }: Props) {
	return (
		<Box
			className="page-content d-flex flex-column p-0 flex-1"
			style={{ minHeight: '100vh', maxHeight: '100vh', overflowY: 'auto' }}
		>
			{/* <div className="page-title-box d-sm-flex align-items-center justify-content-between"> */}
			{/* <Box className="page-title-box- card d-sm-flex align-items-center justify-content-between flex-row  px-3 fixed-top main-content" py='2'>
				<h4 className="mb-sm-0">{title}</h4>

				<div className="page-title-right">
					<ol className="breadcrumb m-0">
						<li className="breadcrumb-item">
							<a href="/">Apps</a>
						</li>
						<li className="breadcrumb-item active">Calendar</li>
					</ol>
				</div>
			</Box>
			<Box pt='12' className="container-fluid">{children}</Box> */}
			<Box
				bg="white"
				h="40px"
				className="shadow d-sm-flex align-items-center justify-content-between flex-row  px-3"
				zIndex={40}
			>
				<h4 className="mb-sm-0">{title}</h4>

				<div className="page-title-right">
					<ol className="breadcrumb m-0">
						<li className="breadcrumb-item">
							<a href="/">Apps</a>
						</li>
						<li className="breadcrumb-item active">Calendar</li>
					</ol>
				</div>
			</Box>
			<Box
				className='container-fluid py-3'
				flex={1}
				h="full"
				overflowY={'auto'}
				overflowX={'hidden'}
				maxH={'full'}
				maxHeight={'96vh'}
			>
				{children}
			</Box>
		</Box>
	)
}
