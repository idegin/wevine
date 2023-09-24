import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage/session'
import authSlice from './features/auth.slice'
import viewSlice from './features/view.slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'


const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	auth: authSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: {
		app: persistedReducer,
		view: viewSlice,

        // Services
		// [authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat([
			// authApi.middleware,
		]),
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

export const persistor = persistStore(store)


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
