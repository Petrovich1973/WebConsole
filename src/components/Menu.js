import React from 'react'
import {connect} from 'react-redux'
import * as types from '../actionTypes'
import {sendData} from '../actions'

const Menu = (props) => {
    const {state, dispatch} = props
    const {form, screenSettings} = state


    const onClickItem = payload => {
        dispatch({
            type: types.APP_UPDATE,
            payload
        })
    }

    return (
        <div className="menu">
            <span className="item" onClick={() => onClickItem({
                    screenSettings: {
                        ...screenSettings,
                        visible: !screenSettings.visible
                    }
                }
            )}>Edit config</span>
            <span className="item" onClick={() => dispatch(sendData({...form}))}>Send data</span>
        </div>
    )
}

Menu.displayName = 'Menu'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Menu)