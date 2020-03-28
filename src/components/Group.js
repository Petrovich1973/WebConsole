import React from 'react'
import Row from "./Row"

const Group = (props) => {
    const {name, group, onChangeField = Function} = props
    const {label, fields} = group

    const handleChange = row => {
        onChangeField({
            [name]: {
                ...group,
                fields: {
                    ...group.fields,
                    ...row
                }
            }
        })
    }

    return (
        <div className="group">
            {label && <h5>{label}</h5>}
            <div className="fields">
                <table>
                    <tbody>
                    {Object.keys(fields)
                        .map((key, idx) => (
                            <Row
                                key={idx}
                                name={key}
                                row={fields[key]}
                                onChangeField={handleChange}/>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

Group.displayName = 'Group'

export default Group