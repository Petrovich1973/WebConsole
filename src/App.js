import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import * as types from './actionTypes'
import {getConfig} from './actions'
import './App.less'
import Loader from "./components/Loader"
import Column from "./components/Column"
import Modal from "./components/Modal"
import Menu from "./components/Menu"
import ScreenSettings from "./components/screenSettings"
import ScreenResult from "./components/ScreenResult"

const App = (props) => {
    const {state, dispatch} = props
    const {spinner, form, modals, listErrors, result} = state
    const {config} = modals

    const [menuVisible, setMenu] = useState(false)
    const [clientY, setClientY] = useState(20)

    const listFormKeys = Object.keys(form)

    useEffect(() => {
        fetchConfig()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const Root = document.querySelector('#root')
        Root.addEventListener('mousemove', handleMouseMove, false)
        return () => {
            Root.removeEventListener('mousemove', handleMouseMove, false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuVisible, clientY])

    const fetchConfig = () => dispatch(getConfig())

    const handleMouseMove = event => {
        if (event.clientY < clientY) {
            setMenu(true)
            setClientY(60)
        } else {
            setMenu(false)
            setClientY(20)
        }
    }

    const handleChangeField = column => {
        dispatch({
            type: types.APP_UPDATE,
            payload: {
                form: {
                    ...form,
                    ...column
                }
            }
        })
    }

    const oncloseModal = name => {
        dispatch({
            type: types.APP_UPDATE,
            payload: {
                modals: {
                    ...modals,
                    [name]: null
                }
            }
        })
    }

    const oncloseResult = () => {
        dispatch({
            type: types.APP_UPDATE,
            payload: {
                result: {}
            }
        })
    }

    const oncloseError = time => {
        dispatch({
            type: types.APP_UPDATE,
            payload: {
                listErrors: listErrors.filter(err => err.time !== time)
            }
        })
    }

    return (
        <div className="App">
            {listFormKeys.length ? listFormKeys
                .map((key, idx) => (
                    <Column
                        key={idx}
                        {...props}
                        name={key}
                        column={form[key]}
                        onChangeField={handleChangeField}/>
                )) : <h1 className="align-center">Ожидание ответа с сервера...</h1>}

            {config ? (
                <Modal
                    className="warning"
                    style={{width: 900}}
                    title="Edit config json"
                    onClose={() => oncloseModal('config')}>
                    <ScreenSettings/>
                </Modal>
            ) : null}

            {'result' in result ? (
                <Modal
                    className="success"
                    style={{width: 900}}
                    title="Predict"
                    onClose={oncloseResult}>
                    <ScreenResult/>
                </Modal>
            ) : null}

            {menuVisible ? <Menu/> : null}

            {listErrors.map((err, idx) => {
                const {time, error} = err
                const {config = {}, response = {}} = {...error}
                const {method = null, url = null} = {...config}
                const {status = null, statusText = null} = {...response}

                return (
                    <Modal
                        key={idx}
                        className="danger"
                        style={{width: 600}}
                        title={status}
                        onClose={() => oncloseError(time)}>
                        <div className="content" style={{padding: '1rem'}}>
                            <small>method: {method}</small><br/>
                            <small>url: {url}</small><br/>
                            <small>status: {status}</small><br/>
                            <small>statusText: {statusText}</small>
                        </div>
                    </Modal>
                )
            })}

            {spinner ? <Loader/> : null}

        </div>
    )
}

App.displayName = 'App'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(App)