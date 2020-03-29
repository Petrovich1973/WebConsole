import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"
import {sendData} from '../actions'

const ScreenResult = (props) => {
    const {state, dispatch} = props
    const {form, result = {}} = state
    const res = 'result' in result

    const [dataReq, setData] = useState({})
    const [ready, setReady] = useState(false)

    useEffect(() => {
        getResult()
    }, [])

    useEffect(() => {
        if (ready) send(dataReq)
    }, [ready])

    const getResult = async () => {
        await getData(form)
        setReady(true)
    }

    const send = async () => {
        dispatch(sendData(dataReq))
    }

    const getData = async data => {
        function req(d) {
            Object.keys(d).forEach(key => {
                if (d[key] instanceof Object) {
                    if ('value' in d[key]) {
                        setData(dataReq => ({...dataReq, [key]: d[key].value}))
                    } else {
                        req(d[key])
                    }
                }
            })
        }

        await req(data)
        return true
    }

    return (
        <div className="content screenResult">
            {res ? (
                <>
                    <h4>Code result: {result.result}</h4>
                    <p>{result.message}</p>
                </>
            ) : <p>Ожидание ответа с сервера...</p>}
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(ScreenResult)