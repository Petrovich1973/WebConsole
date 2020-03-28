import React from 'react'
import {connect} from 'react-redux'
import * as types from './actionTypes'
import './App.less'
import Column from "./components/Column";

const App = (props) => {
    const {state, dispatch} = props
    const {form} = state

    const handleChange = column => {
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

    return (
        <div className="App">
            {Object.keys(form)
                .map((key, idx) => (
                    <Column
                        key={idx}
                        {...props}
                        name={key}
                        column={form[key]}
                        onChangeField={handleChange}/>
                ))}
        </div>
    )
}

App.displayName = 'App'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(App)