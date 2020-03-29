import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {sendData} from '../actions'

const ScreenResult = (props) => {
    const {state, dispatch} = props
    const {result: {result = 0, message = ''} = {}} = state

    useEffect(() => {
        getResult()
    }, [])

    const getResult = () => {
        dispatch(sendData())
    }

    return (
        <div className="content screenResult">
            <h4>Code result: {result}</h4>
            <p>{message}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(ScreenResult)