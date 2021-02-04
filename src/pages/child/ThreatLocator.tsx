import { Grid, Typography, Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        card: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
        mainColor: {
            color: '#34495e'
        },
        img: {
            width: '7rem'
        }
    }),
);

export default function ThreatLocator() {
    const classes = useStyles();
    return(
        <Grid container>
            
            <Typography className={`${classes.mainColor} `} variant="h4" noWrap>
                Threat locator
            </Typography>
            <Typography className={`${classes.mainColor} `} variant="h4" noWrap>
                Use the threat detector to determine the safety of the networks around you.
            </Typography>
            <Grid>
                <Button>Check threat</Button>
            </Grid>
        </Grid>
    )
}