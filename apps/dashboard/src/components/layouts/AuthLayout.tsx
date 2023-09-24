import React from 'react'

type Props = {
	children: any
}

export default function AuthLayout({ children }: Props) {
	return (
		<div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
			<div className="auth-page-content overflow-hidden pt-lg-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-12 col-xl-8">
							<div className="card overflow-hidden m-0">
								<div className="row justify-content-center g-0">
									<div className="col-lg-6"></div>
									<div className="col-lg-6">{children}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
