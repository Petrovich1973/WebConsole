import React, {useEffect} from 'react'
import {connect} from "react-redux"
import * as types from "../actionTypes";

const ScreenResult = (props) => {
    const {state, dispatch} = props
    const {result = {}} = state

    useEffect(() => {
        window.addEventListener('keyup', handleEsc, false)
        return () => {
            window.removeEventListener('keyup', handleEsc, false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleEsc = e => {
        e.preventDefault()
        if (e.keyCode === 27) {
            dispatch({type: types.APP_UPDATE, payload: {result: {}}})
        }
    }

    return (
        <div className="content screenResult">
            <h4>Code result: {result.result}</h4>
            <p>{result.message}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(ScreenResult)