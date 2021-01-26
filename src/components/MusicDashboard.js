import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Notifications from './Notifications'

const useStyles = makeStyles((theme) => ({
    page: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        margin: "auto",
        marginBottom: 10,
        width: 250,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardHeading: {
        fontWeight: "bold"
    }
}));

export default function MusicDashboard(props) {

    const { state, handleOnline, handleVolume, handleQuality } = props

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <h1 style={{ color: "gray" }}>Welcome User!</h1>
            <div className={classes.page}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" component="h1" className={classes.cardHeading}>Online Mode</Typography>
                        <Typography>
                            Is this application connected to the internet?</Typography><br /><br /><br />
                        <Switch
                            className={classes.switch}
                            checked={state.online}
                            onChange={handleOnline}
                            name="online"
                            color="secondary"
                        />
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" component="h1" className={classes.cardHeading}>Master Volume</Typography>
                        <Typography>
                            Overrides all other sound settings in this application
                        </Typography><br /><br /><br />
                        <Slider
                            defaultValue={state.masterVolume}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={0}
                            max={100}
                            name="masterVolume"
                            value={state.masterVolume}
                            onChange={handleVolume}
                        />
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" component="h2" className={classes.cardHeading}>Sound Quality</Typography>
                        <Typography>
                            Manually control the music quality in the event of a poor connection
                        </Typography><br /><br />
                        <Select
                            label="Age"
                            id="demo-simple-select"
                            value={state.quality}
                            onChange={handleQuality}
                        >
                            <MenuItem value={1}>Low</MenuItem>
                            <MenuItem value={2}>Normal</MenuItem>
                            <MenuItem value={3}>High</MenuItem>
                        </Select>
                    </CardContent>
                </Card>

            </div>
            <Notifications state={state} />
        </Container>
    )
}