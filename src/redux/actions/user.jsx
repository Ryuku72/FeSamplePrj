import { USER_LOGIN, FETCH_COLOR, USER_ERROR, USER_ERROR_CLR } from './types'

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

export const userError = () => {
    return {
        type: USER_ERROR,
    }
}

export const userClear = () => {
    return {
        type: USER_ERROR_CLR,
    }
}
