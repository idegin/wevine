import StatusCard from '@/components/atoms/StatusCard'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import React from 'react'
import { HiChartBar, HiMiniBriefcase, HiWallet } from 'react-icons/hi2'

type Props = {}

export default function OverviewPage({}: Props) {
	return (
		<DefaultLayout title="Overview" name="overview">
			<div>
				<div className="row project-wrapper">
					<div className="col-xxl-8">
						<div className="row">
							<div className="col-xl-4">
								<StatusCard
									color="gray"
									heading="Total Gigs"
									subHeading="Total number of .."
									value="34"
									Icon={HiMiniBriefcase}
								/>
							</div>
							<div className="col-xl-4">
								<StatusCard
									color="green"
									heading="Total Earings"
									subHeading="Total number of .."
									value="$343,034"
									Icon={HiWallet}
								/>
							</div>
							<div className="col-xl-4">
								<StatusCard
									color="orange"
									heading="Tasks Completed"
									subHeading="Total number of .."
									value="95"
									Icon={HiChartBar}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	)
}
