import React from 'react'
import Block from "./Block"

const Column = (props) => {
    const {name, column, onChangeField = Function} = props
    const {blocks = {}} = column

    const handleChange = block => {
        onChangeField({
            [name]: {
                ...column,
                blocks: {
                    ...column.blocks,
                    ...block
                }
            }
        })
    }

    return (
        <div className="column">
            {Object.keys(blocks)
                .map((key, idx) => (
                <Block
                    key={idx}
                    {...props}
                    name={key}
                    block={blocks[key]}
                    onChangeField={handleChange}/>
            ))}
        </div>
    )
}

Column.displayName = 'Column'

export default Column