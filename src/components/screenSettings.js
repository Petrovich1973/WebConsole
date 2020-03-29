import React from 'react'
import {connect} from 'react-redux'

const ScreenSettings = (props) => {
    const {state, dispatch} = props

    return (
        <div className="screenSettings">
            screenSettings
        </div>
    )
}

ScreenSettings.displayName = 'ScreenSettings'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(ScreenSettings)