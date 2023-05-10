import React from 'react'
import ReactDOM from 'react-dom'


const BackDrop = (props) => {
    return (<div className='backdrop' onClick={props.onClose} ></div>)
}
const ModalOverlay = (props) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-content'>{props.children}</div>
        </div>)
}
export default function Modal(props) {
    const portalElement = document.getElementById('overlay');
    return (
        <>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}
 