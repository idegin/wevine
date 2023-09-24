import { AuthState } from "@/redux/features/auth.slice"
import { ViewState } from "@/redux/features/view.slice"

export interface AppStore {
    app: {
        auth: AuthState
    }
    view: ViewState
}