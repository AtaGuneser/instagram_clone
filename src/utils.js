import { setUser } from './store/auth'
import store from './store/index'



export const userHandle = data => {
    store.dispatch(setUser(data))
}