import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
	children: any
}

export default function AuthLayout({ children }: Props) {
	return (
		<div className="auth-page-wrapper auth-bg-cover- bg-theme-darker py-5 d-flex justify-content-center align-items-center min-vh-100">
			<div className="auth-page-content overflow-hidden pt-lg-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-12 col-xl-8">
							<div className="card overflow-hidden m-0">
								<div className="row justify-content-center g-0">
									<div className="col-lg-6">
										<div className="p-lg-5 p-4 auth-one-bg h-100">
											<Box
												bg="theme"
												opacity={0.7}
												p={'10'}
												position={'absolute'}
												top={0}
												left={0}
												bottom={0}
												right={0}
											></Box>
											<div className="position-relative h-100 d-flex flex-column">
												<div className="mb-4">
                                                <a href="/" className="d-block">
                                                    <img src="/assets/images/logo-light.png" alt="" height="18" />
                                                </a>
                                            </div>
											</div>
										</div>
									</div>
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
