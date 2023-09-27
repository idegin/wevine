import AuthLayout from '@/components/layouts/AuthLayout'
import React from 'react'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <AuthLayout>
        <LoginForm />
    </AuthLayout>
  )
}
