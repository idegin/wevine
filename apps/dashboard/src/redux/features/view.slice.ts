import { createSlice } from '@reduxjs/toolkit'

export interface ViewState {
	show_left_nav: boolean
}

const initialState: ViewState = {
	show_left_nav: true,
}

export const viewSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setViewState: (state) => {
			return { ...state }
		},
	},
})

export const { setViewState } = viewSlice.actions

export default viewSlice.reducer
