import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WifiIcon from '@material-ui/icons/Wifi';

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        '&:before': {
        display: 'none',
        },
        '&$expanded': {
        margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: '#f6f8f8',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
        minHeight: 56,
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        '&$expanded': {
        margin: '12px 0',
        },
    },
    expanded: {
        backgroundColor: '#f6f8f8',
    },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        border: '.1rem solid #e6e6e6',
        borderRadius: '0.9rem',
        padding: '0',
        marginBottom: '2rem',
        width: '100%',
    },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bg: {
            backgroundColor: '#f6f6f6'
        },
        link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        },
        wifi: {
            position: 'relative',
            '&:nth-child(odd)': {
                borderRight: '.1rem solid #e6e6e6',
                borderBottom: '.1rem solid #e6e6e6',
            },
            '&:nth-child(even)': {
                borderBottom: '.1rem solid #e6e6e6',
            },
            '&:nth-last-child(1)': {
                borderBottom: 0
            },
        },
        wifiIcon: {
            color: '#4579f0',
            width: '4rem',
            fontSize: '2.5rem',
            paddingLeft: '1rem',
        },
        statusIcon: {
            position: 'absolute',
            left: '2rem',
            top: '1rem',
            color: '#00893a',
            width: 'auto',
            fontSize: '1.2rem',
        }
    }),
);


export default function WifiHistory() {
    const [state, setState] = React.useState({
        expanded: true
    })

    const handleChange = () => {
        setState({
            expanded: !state.expanded,
        });
    }
    const classes = useStyles();
    const wifiData = [{
        status: 'good',
        name: 'RD-Test',
        time: 'Connected last 2021-02-03 13:10:13'
    }, {
        status: 'good',
        name: 'lenovo',
        time: 'Connected last 2021-02-01 13:10:13'
    }, {
        status: 'good',
        name: 'lenovo-5G',
        time: 'Connected last 2021-02-01 13:10:13'
    }, {
        status: 'good',
        name: 'CDL',
        time: 'Connected last 2021-02-01 13:10:13'
    }, {
        status: 'bad',
        name: 'CDL',
        time: 'Connected last 2021-02-01 13:10:13'
    }];
    
  return (
    <div>
      <Accordion square className={classes.bg} expanded={state.expanded} onChange={handleChange}>
        <AccordionSummary
            aria-controls="panel1d-content"
            expandIcon={<ExpandMoreIcon />}>
          <Typography>Network History</Typography>
          <Grid>
            <Typography className={classes.link}>{state.expanded? 'Collapse' : 'Expand'}</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container>
                {wifiData.map((wifi) => (
                    <Grid item xs={12} sm={6} md={12} lg={6} xl={6}
                        className={`${classes.wifi} d-flex align-items-center`}>
                        <Grid>
                            <WifiIcon className={`${classes.wifiIcon} pr-3`} />
                            <CheckCircleIcon className={`${classes.statusIcon} pr-3`} />
                        </Grid>
                        <Grid>
                            <Typography variant="body1">{wifi.name}</Typography>
                            <Typography variant="caption">{wifi.time}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}