import React from 'react'
import {connect} from 'react-redux'
import * as types from '../actionTypes'

const Menu = (props) => {
    const {state, dispatch} = props
    const {screenSettings} = state


    const onClickItem = payload => {
        dispatch({
            type: types.APP_UPDATE,
            payload
        })
    }

    return (
        <div className="menu">
            <div className="panel">
                <span className="item" onClick={() => onClickItem({
                        screenSettings: {
                            ...screenSettings,
                            visible: !screenSettings.visible
                        }
                    }
                )}>Settings</span>
            </div>
        </div>
    )
}

Menu.displayName = 'Menu'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Menu)