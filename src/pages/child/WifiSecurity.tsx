import React from 'react';
import { makeStyles, Theme, createStyles, Card, Grid, Typography, Chip, Switch } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WifiHistory from './WifiHistroy';

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
        borderBottom: {
            borderBottom: '1px solid rgba(0,0,0,.125)'
        }
    }),
);


function WifiSecurity(props: any) {
    const [state, setState] = React.useState({
        checked: true,
    });
    const classes = useStyles();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({checked: !state.checked});
      };
    return (
        <Card>
            <Grid container className={classes.grayBg}>
                <Grid container className={`${classes.borderBottom} px-3 py-2`}>
                    <Grid item xs={9} className='d-flex align-items-center'>
                        <CheckCircleIcon className='pr-3' style={{color: '#00893a', width: 'auto'}} />
                        <Typography className={`${classes.title} ${classes.mainColor} pr-3`} variant="h5" noWrap>
                            {props.featureName}
                        </Typography>
                        <Chip className={classes.chip} label={props.statusText} />
                    </Grid>
                    <Grid item xs={3} className='text-right'>
                        <Switch
                            color="default"
                            checked={state.checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'wifi checkbox' }}
                        />
                    </Grid>
                </Grid>
                <Grid container className='px-3'>
                    <WifiHistory />
                </Grid>
            </Grid>
        </Card>
    )
};
export default WifiSecurity;