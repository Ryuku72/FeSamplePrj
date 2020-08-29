import { USER_LOGIN, FETCH_COLOR } from './types'

export const userLogin = (data) => {
    return {
        type: USER_LOGIN,
        payload: data
    }
};

export const fetchColor = (data) => {
    return {
        type: FETCH_COLOR,
        payload: data
    }
}
