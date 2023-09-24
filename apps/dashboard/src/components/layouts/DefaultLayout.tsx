import React from 'react'
import SideNav from './SideNav'
import PageContainer from './PageContainer'
import LoginPage from '../pages/login/LoginPage'

type Props = {
	children: any
    title: string
    name: string
}

export default function DefaultLayout({ children, name, title }: Props) {

	// if(true){
	// 	return <LoginPage />
	// }
	return (
		<div id="layout-wrapper">
			<div
				className="app-menu navbar-menu p-0 m-0"
				style={{ color: 'white', background: '#1F4B3F' }}
			>
				<SideNav activePage={name} />
			</div>
			<main className="main-content" style={{ minHeight: '100vh'}}>
				<PageContainer title={title}>
					{children}
					</PageContainer>
			</main>
		</div>
	)
}
