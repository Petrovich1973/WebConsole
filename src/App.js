import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import * as types from './actionTypes'
import {getConfig} from './actions'
import './App.less'
import Column from "./components/Column"
import Modal from "./components/Modal"
import Menu from "./components/Menu"
import ScreenSettings from "./components/screenSettings"

const App = (props) => {
    const {state, dispatch} = props
    const {form, screenSettings} = state

    const [menu, setMenu] = useState(false)
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
    }, [menu, clientY])

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

    const onToggleSettings = () => {
        dispatch({
            type: types.APP_UPDATE,
            payload: {
                screenSettings: {
                    ...screenSettings,
                    visible: !screenSettings.visible
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

            {screenSettings.visible ? (
                <Modal
                    style={{width: 900}}
                    title="Settings"
                    onClose={onToggleSettings}>
                    <ScreenSettings/>
                </Modal>
            ) : null}

            {menu ? <Menu/> : null}
        </div>
    )
}

App.displayName = 'App'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(App)