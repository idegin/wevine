import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
	user: null
}

const initialState: AuthState = {
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthState: (state) => {
			return { ...state }
		},
	},
})

export const { setAuthState } = authSlice.actions

export default authSlice.reducer
