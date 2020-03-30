import axios from "axios"
import * as types from './actionTypes'

const config = {
    url: 'http://localhost:5000/api'
}

export function getReducer() {
    return function (dispatch, getStore) {

        const store = getStore()
        return (store)
    }
}

export function handleError(err) {
    return function (dispatch, getStore) {

        const store = getStore()

        dispatch({
            type: types.APP_UPDATE, payload: {
                spinner: false,
                listErrors: [...store.listErrors, {time: Date.now(), error: err}]
            }
        })
    }
}

export function getConfig() {
    return function (dispatch) {

        dispatch({
            type: types.APP_UPDATE, payload: {
                spinner: true
            }
        })

        axios.get(`${config.url}/config`)
            .then(response => {
                dispatch({
                    type: types.APP_UPDATE, payload: {
                        form: response.data,
                        spinner: false
                    }
                })
            })
            .catch(err => {
                dispatch(handleError(err))
            })
    }
}

export function setConfig(params) {
    return function (dispatch) {

        dispatch({
            type: types.APP_UPDATE, payload: {
                spinner: true
            }
        })

        axios.post(`${config.url}/config`, {...params})
            .then(response => {
                dispatch({
                    type: types.APP_UPDATE, payload: {
                        form: response.data,
                        spinner: false
                    }
                })
            })
            .catch(err => {
                dispatch(handleError(err))
            })
    }
}

export function sendData(params) {
    return function (dispatch) {

        dispatch({
            type: types.APP_UPDATE, payload: {
                spinner: true
            }
        })

        axios.post(`${config.url}/data`, {...params})
            .then((response) => {
                dispatch({
                    type: types.APP_UPDATE, payload: {
                        result: response.data,
                        spinner: false
                    }
                })
            })
            .catch((err) => {
                dispatch(handleError(err))
            })
    }
}