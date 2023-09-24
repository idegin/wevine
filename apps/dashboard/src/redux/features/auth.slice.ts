import { AuthUser, AuthUserInfo } from '@/types/auth.types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
	user: null | AuthUser
	user_info: null | AuthUserInfo
}

const initialState: AuthState = {
	user: null,
	user_info: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthState: (state, action: PayloadAction<any>) => {
			return { ...state, ...action.payload }
		},
	},
})

export const { setAuthState } = authSlice.actions

export default authSlice.reducer
