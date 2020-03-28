import React from 'react'

const Row = (props) => {
    const {name, row, onChangeField = Function} = props
    const {label, value, unit} = row

    const handleChange = e => {
        onChangeField({
            [name]: {
                ...row,
                value: e.target.value
            }
        })
    }

    return (
        <tr>
            <td title={name}>{label}</td>
            <td>
                <input type="text" value={value} onChange={handleChange}/>
            </td>
            <td>{unit}</td>
        </tr>
    )
}

Row.displayName = 'Row'

export default Row