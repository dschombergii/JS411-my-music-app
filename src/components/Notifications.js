import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    alert: {
        marginBottom: "10px"
    }
}));

export default function Notifications(props) {

    const { state } = props
    const classes = useStyles()

    return (
        <div>
            <h3>System Notifications:</h3>
            {state.online === false &&
                < Alert severity="warning" className={classes.alert}>
                    Your application is offline. You won't be able to share or stream music to other devices.</Alert>}
            {state.masterVolume > 80 &&
                < Alert severity="info" className={classes.alert}>
                    Listening to music at a high volume could cause long-term hearing loss.</Alert>}
            {state.quality === 1 &&
                < Alert severity="warning" className={classes.alert}>Music quality is degraded. Increase quality if your connection allows it.</Alert>}
        </div >
    )
}
