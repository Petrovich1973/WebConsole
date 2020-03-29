import React from 'react'
import {connect} from "react-redux";

const ScreenResult = (props) => {
    const {state} = props
    const {result: {result = 0, message = ''}} = state

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