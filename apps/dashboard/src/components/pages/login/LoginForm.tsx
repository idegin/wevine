import WButton from '@/components/atoms/WButton'
import React, { useState } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'
import { metadata } from 'variables'
import { useLoginMutation } from '@/redux/services/auth.services'
import { useToast } from '@chakra-ui/react'
import { AuthUser } from '@/types/auth.types'
import Cookies from 'js-cookie'
import { setViewState } from '@/redux/features/view.slice'
import { useDispatch } from 'react-redux'

type Props = {}

export default function LoginForm({}: Props) {
	const [login, { isLoading }] = useLoginMutation()
	const [showPassword, setShowPassword] = useState(false)
	const toast = useToast()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const onSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
		e.preventDefault()
		let res: any = await login({
			email: email.toLowerCase().trim(),
			password: password.trim(),
		})
		if ('data' in res) {
			let userData: AuthUser = res.data.user
			if (
				userData.permissions.includes('admin') ||
				userData.permissions.includes('senior-manager')
			) {
				Cookies.set('we_auth', res.data.jwt, { expires: 1 })
			} else {
				Cookies.set('we_auth', res.data.jwt, { expires: 30 })
			}
			dispatch(setViewState({ app_loading: true }))
			window.location.reload()
		} else {
			toast({
				title: res?.error?.data?.message,
				status: 'error',
				position: 'top',
			})
		}
	}

	return (
		<div className="p-lg-5 p-4">
			<div>
				<h5 className="text-primary">Register Account</h5>
				<p className="text-muted">
					Get your Free {metadata.title} account now.
				</p>
			</div>

			<div className="mt-4">
				<form className="needs-validation" onSubmit={onSubmit}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email <span className="text-danger">*</span>
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter email address"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label className="form-label" htmlFor="password-input">
							Password <span className="text-danger">*</span>
						</label>
						<div className="position-relative auth-pass-inputgroup">
							<input
								type={showPassword ? 'text' : 'password'}
								className="form-control pe-5 password-input"
								placeholder="Enter password"
								id="password-input"
								aria-describedby="passwordInput"
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button
								className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon h-100"
								type="button"
								id="password-addon"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<HiEyeSlash className="align-middle" />
								) : (
									<HiEye className="align-middle" />
								)}
							</button>
						</div>
					</div>

					{/* <div className="mb-4">
						<p className="mb-0 fs-12 text-muted fst-italic">
							By registering you agree to the Velzon{' '}
							<a
								href="#"
								className="text-primary text-decoration-underline fst-normal fw-medium"
							>
								Terms of Use
							</a>
						</p>
					</div> */}

					<div className="mt-4">
						<WButton type="submit" w="full" isLoading={isLoading}>
							Login
						</WButton>
					</div>

					{/* <div className="mt-4 text-center">
						<div className="signin-other-title">
							<h5 className="fs-13 mb-4 title text-muted">
								Create account with
							</h5>
						</div>

						<div>
							<button
								type="button"
								className="btn btn-primary btn-icon waves-effect waves-light"
							>
								<i className="ri-facebook-fill fs-16"></i>
							</button>
							<button
								type="button"
								className="btn btn-danger btn-icon waves-effect waves-light"
							>
								<i className="ri-google-fill fs-16"></i>
							</button>
							<button
								type="button"
								className="btn btn-dark btn-icon waves-effect waves-light"
							>
								<i className="ri-github-fill fs-16"></i>
							</button>
							<button
								type="button"
								className="btn btn-info btn-icon waves-effect waves-light"
							>
								<i className="ri-twitter-fill fs-16"></i>
							</button>
						</div>
					</div> */}
				</form>
			</div>

			<div className="mt-5 text-center">
				<p className="mb-0">
					Are you a client ?{' '}
					<a
						href="/"
						className="fw-semibold text-theme fw-bold text-decoration-underline"
					>
						{' '}
						login here
					</a>{' '}
				</p>
			</div>
		</div>
	)
}
