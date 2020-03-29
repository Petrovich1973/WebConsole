import React from 'react'

const Modal = ({children, style = {}, title = 'Dialog window', footer = null, onClose = Function}) => {
    return (
        <div className="modal">
            <div className="overlay" onClick={onClose}/>
            <div className="window" style={{...style}}>
                <div className="header">
                    <h4>{title}</h4>
                    <button className="close" onClick={onClose}>
                        <span>&#10005;</span>
                    </button>
                </div>
                {children}
                {footer ? <div className="footer">{footer}</div> : null}
            </div>
        </div>
    )
}

Modal.displayName = 'Modal'

export default Modal