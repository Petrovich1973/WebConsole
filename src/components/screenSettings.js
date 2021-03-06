import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {setConfig} from '../actions'
import * as types from '../actionTypes'

const ScreenSettings = (props) => {
    const {state, dispatch} = props
    const {form, modals} = state
    const [textarea, setTextarea] = useState('')
    const textArea = useRef(null)

    useEffect(() => {
        setTextarea(JSON.stringify({...form}))
        setTimeout(() => autoGrow(), 0)
        window.addEventListener('resize', resetGrow, false)
        window.addEventListener('keyup', handleEsc, false)
        return () => {
            window.removeEventListener('resize', resetGrow, false)
            window.removeEventListener('keyup', handleEsc, false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleEsc = e => {
        e.preventDefault()
        if (e.keyCode === 27) {
            dispatch({type: types.APP_UPDATE, payload: {modals: {...modals, config: false}}})
        }
    }

    const handleChange = e => {
        setTextarea(e.target.value)
        setTimeout(() => resetGrow(), 0)
    }

    const reset = () => {
        setTextarea(JSON.stringify({...form}))
        setTimeout(() => resetGrow(), 0)
    }

    const resetGrow = () => {
        const {current} = textArea
        const {style} = current
        style.height = 'auto'
        autoGrow()
    }

    const autoGrow = () => {
        const {current} = textArea
        const {scrollHeight, clientHeight, style} = current
        if (scrollHeight > clientHeight) {
            style.height = scrollHeight + "px"
        }
    }

    const handleSend = () => {
        try {
            const params = JSON.parse(textarea)
            dispatch(setConfig(params))
        } catch (err) {
            alert('Схема не валидна!')
        }

    }

    return (
        <>
            <div className="content screenSettings">
                <textarea
                    className="noscrollbars"
                    ref={textArea}
                    value={textarea}
                    onKeyUp={autoGrow}
                    onChange={handleChange}/>

            </div>
            <div className="footer screenSettingsFooter">
                <button onClick={reset} className="btnDefault">
                    <span>Reset</span>
                </button>
                <button onClick={handleSend} className="btnAction">
                    <span>Save</span>
                </button>
            </div>
        </>
    )
}

ScreenSettings.displayName = 'ScreenSettings'

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(ScreenSettings)