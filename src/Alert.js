import React from 'react'

export default function Alert(props) {
    return (

        props.alert && <div class="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>{props.alert.msg}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            </button>
        </div>

    )
}
