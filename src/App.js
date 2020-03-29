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
    const {spinner, form, modals} = state
    const {config, result} = modals

    const [menuVisible, setMenu] = useState(false)
    const [clientY, setClientY] = useState(20)

    const listFormKeys = Object.keys(form)

    useEffect(() => {
        dispatch(getConfig())
    }, [])

    useEffect(() => {
        const Root = document.querySelector('#root')
        Root.addEventListener('mousemove', handleMouseMove, false)
        return () => {
            Root.removeEventListener('mousemove', handleMouseMove, false)
        }
    }, [menuVisible, clientY])

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
                    style={{width: 900}}
                    title="Edit config"
                    onClose={() => oncloseModal('config')}>
                    <ScreenSettings/>
                </Modal>
            ) : null}

            {result ? (
                <Modal
                    style={{width: 900}}
                    title="Result"
                    onClose={() => oncloseModal('result')}>
                    <ScreenResult/>
                </Modal>
            ) : null}

            {menuVisible ? <Menu/> : null}
            {spinner ? <Loader/> : null}

        </div>
    )
}

App.displayName = 'App'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(App)