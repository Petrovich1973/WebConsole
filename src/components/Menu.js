import React from 'react'
import {connect} from 'react-redux'
import * as types from '../actionTypes'
import {sendData} from '../actions'

const Menu = (props) => {
    const {state, dispatch} = props
    const {modals, form} = state

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
                result: {},
                modals: {
                    ...newModals,
                    [name]: true
                }
            }
        })
    }

    const onClickPredict = async () => {
        let dataReq = {}
        function req(d) {
            Object.keys(d).forEach(key => {
                if (d[key] instanceof Object) {
                    if ('value' in d[key]) {
                        dataReq = ({...dataReq, [key]: d[key].value})
                    } else {
                        req(d[key])
                    }
                }
            })
        }
        await req(form)
        dispatch(sendData(dataReq))
    }

    return (
        <div className="menu">
            {Object.keys(modals).map((key, idx) => (
                <span key={idx} className="item" onClick={() => onClickItem(key)}>{key}</span>
            ))}
            <span className="item" style={{cursor: 'default'}}>Console</span>
            <span className="item" onClick={onClickPredict}>predict</span>
        </div>
    )
}

Menu.displayName = 'Menu'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Menu)