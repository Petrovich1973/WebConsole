import React from 'react'
import {connect} from "react-redux"

const ScreenResult = (props) => {
    const {state} = props
    const {result = {}} = state

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