import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Box } from '@chakra-ui/react'
import {
	HiCheckCircle,
	HiExclamationCircle,
	HiFaceFrown,
	HiMiniExclamationTriangle,
	HiXMark,
} from 'react-icons/hi2'

type WAlertStatus = 'error' | 'success' | 'info' | 'warning'
type Props = {
	status?: WAlertStatus
	heading?: string
	subHeading?: string
	content?: string
	onClose?: () => void
}

export default function WAlerts({
	status,
	content,
	heading,
	subHeading,
	onClose,
}: Props) {
	return (
		<Box
			rounded={'md'}
			className={classNames(
				'alert alert-dismissible alert-additional fade show px-2 shadow',
				{
					'alert-danger': status === 'error',
					'alert-info': status === 'info',
					'alert-success': status === 'success',
					'alert-warning': status === 'warning',
				},
			)}
			role="alert"
		>
			<div className="alert-body">
				{onClose && (
					<button
						style={{ position: 'absolute', right: 3, top: 3, color: 'inherit' }}
						className="btn"
					>
						<HiXMark size={20} />
					</button>
				)}
				<div className="d-flex">
					<div className="flex-shrink-0 me-3">
						{status === 'warning' && <HiMiniExclamationTriangle size={30} />}
						{status === 'error' && <HiFaceFrown size={30} />}
						{status === 'success' && <HiCheckCircle size={30} />}
						{status === 'info' && <HiExclamationCircle size={30} />}
						{/* <i className="ri-error-warning-line fs-16 align-middle"></i> */}
					</div>
					<div className="flex-grow-1">
						{heading && <h5 className="alert-heading">{heading}</h5>}
						{subHeading && <p className="mb-0">{subHeading}</p>}
					</div>
				</div>
			</div>
			{content && (
				<Box rounded={'md'} className="alert-content">
					<p className="mb-0">{content}</p>
				</Box>
			)}
		</Box>
	)
}
