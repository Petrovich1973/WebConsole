import React from 'react'
import * as types from '../actionTypes'
import classnames from 'classnames'
import Group from "./Group"

const Block = (props) => {
    const {state, name, block, onChangeField = Function, dispatch} = props
    const {label, style, groups} = block

    const {listExpand} = state

    const isExpand = listExpand.includes(name)

    const onExpand = () => {
        dispatch({
            type: types.APP_UPDATE,
            payload: {
                listExpand: [...listExpand, name]
            }
        })
    }

    const handleChange = group => {
        onChangeField({
            [name]: {
                ...block,
                groups: {
                    ...block.groups,
                    ...group
                }

            }
        })
    }

    return (
        <div className={classnames("block", !isExpand && 'collapse')} style={style}>
            {label && <h3>{label}</h3>}
            {Object.keys(groups)
                .map((key, idx) => (
                    <Group
                        key={idx}
                        name={key}
                        group={groups[key]}
                        onChangeField={handleChange}/>
                ))}
            <div className="veil" style={style} onClick={onExpand}>
                {label && <h3>{label}</h3>}
            </div>
        </div>
    )
}

export default Block