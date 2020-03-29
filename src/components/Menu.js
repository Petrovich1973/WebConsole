import React from 'react'
import {connect} from 'react-redux'
import * as types from '../actionTypes'

const Menu = (props) => {
    const {state, dispatch} = props
    const {modals} = state


    const onClickItem = async name => {

        let newModals = {...modals}

        Object.keys(modals).forEach(item => (
            newModals[item] = null
        ))

        if(modals[name]) {
            await dispatch({
                type: types.APP_UPDATE,
                payload: {
                    modals: {
                        ...newModals
                    }
                }
            })
        }

        dispatch({
            type: types.APP_UPDATE,
            payload: {
                modals: {
                    ...newModals,
                    [name]: true
                }
            }
        })
    }

    return (
        <div className="menu">
            {Object.keys(modals).map((key, idx) => (
                <span key={idx} className="item" onClick={() => onClickItem(key)}>{key}</span>
            ))}
        </div>
    )
}

Menu.displayName = 'Menu'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Menu)