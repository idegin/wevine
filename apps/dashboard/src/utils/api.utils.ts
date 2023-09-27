import axios, { AxiosRequestConfig, AxiosResponse} from 'axios'
import Cookies from 'js-cookie'
import { BACKEND_URL } from './CONSTANTS'

export const APICall = ({
	route,
	options,
	isAuth,
}: {
	route: string
	options?: AxiosRequestConfig
	isAuth?: boolean
}): Promise<AxiosResponse> => {
	return axios(BACKEND_URL + route, {
		...options,
        headers: {
            Authorization: isAuth ? 'Bearer ' + Cookies.get('we_auth') : null
        }
	})
}
