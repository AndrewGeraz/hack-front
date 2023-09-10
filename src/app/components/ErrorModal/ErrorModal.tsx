"use client"

import classes from './ErrorModal.module.scss'

export default function ErrorModal({errText}: {errText: string}) {
    return(
        <div className={classes.Wrapper}>
<h1>{errText}</h1>
        </div>
    )
}