import React from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles, Theme, createStyles, Card, Grid, Typography, Chip, Switch } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import WifiHistory from './WifiHistory';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        mainColor: {
            color: '#34495e'
        },
        grayBg: {
            backgroundColor: '#f6f8f8',
            border: '1px solid rgba(0,0,0,.125)',
        },
        title: {
            fontSize: '1.2rem',
            fontWeight: 700,
        },
        chip: {
            backgroundColor: '#00893a',
            fontWeight: 700,
            color: '#fff',
            textTransform: 'uppercase'
        },
        errchip: {
            backgroundColor: '#db221f',
        },
        borderBottom: {
            borderBottom: '1px solid rgba(0,0,0,.125)'
        }
    }),
);


function WifiSecurity(props: any) {
    const { t, i18n } = useTranslation();
    const [state, setState] = React.useState({
        checked: true,
        statusText: props.checked?t('enable'):t('disable')
    });
    const classes = useStyles();
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            checked: !state.checked,
            statusText: event.target.checked?t('enable'):t('disable')
        });
    };
    const nodeRef = React.useRef(null);
    return (
        <Card>
            <Grid container className={classes.grayBg}>
                <Grid container className={`${state.checked?classes.borderBottom:''} px-3 py-2`}>
                    <Grid item xs={9} className='d-flex align-items-center' ref={nodeRef}>
                        {
                            state.checked?
                            <CheckCircleIcon className='pr-3' style={{color: '#00893a', width: 'auto'}} />
                            :
                            <HighlightOffIcon className='pr-3' style={{color: '#db221f', width: 'auto'}}/>
                        }
                        
                        <Typography className={`${classes.title} ${classes.mainColor} pr-3`} variant="h5" noWrap>
                            {props.featureName}
                        </Typography>
                        <Chip className={`${classes.chip} ${state.checked?'':classes.errchip}`} label={state.statusText} />
                    </Grid>
                    <Grid item xs={3} className='text-right'>
                        <Switch
                            color="primary"
                            checked={state.checked}
                            onChange={handleSwitchChange}
                            inputProps={{ 'aria-label': 'wifi checkbox' }}
                        />
                    </Grid>
                </Grid>
                <Grid container className={`px-3 ${state.checked?'d-block':'d-none'}`}>
                    <WifiHistory />
                </Grid>
            </Grid>
        </Card>
    )
};
export default WifiSecurity;