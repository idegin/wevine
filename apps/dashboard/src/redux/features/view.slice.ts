import { createSlice } from '@reduxjs/toolkit'

export interface ViewState {
	show_left_nav: boolean
	app_loading: boolean
}

const initialState: ViewState = {
	show_left_nav: true,
	app_loading: true
}

export const viewSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setViewState: (state, action) => {
			return { ...state, ...action.payload }
		},
	},
})

export const { setViewState } = viewSlice.actions

export default viewSlice.reducer
