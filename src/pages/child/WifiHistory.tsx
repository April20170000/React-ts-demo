import React from 'react';
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Grid } from '@material-ui/core';
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
        marginBottom: '1rem',
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
            padding: '0.5rem 0',
            '&:nth-child(odd)': {
                borderRight: '.1rem solid #e6e6e6',
                borderBottom: '.1rem solid #e6e6e6',
                
                '&:nth-last-child(1)': {
                    borderBottom: 0
                },
                [theme.breakpoints.only('xs')]: {
                    borderRight: 0
                },
                [theme.breakpoints.only('md')]: {
                    borderRight: 0
                },
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
    const { t, i18n } = useTranslation();
    console.log(i18n);
    const [state, setState] = React.useState({
        expand: true,
        isShowMore: false,
    })

    const handleChange = () => {
        setState({
            expand: !state.expand,
            isShowMore: state.isShowMore,
        });
    }
    const clickShowMore = () => {
        setState({
            expand: state.expand,
            isShowMore: !state.isShowMore
        })
    }
    const classes = useStyles();
    const wifiData = [{
        status: 'good',
        name: 'RD-Test',
        time: 'Connected last 2021-02-03 13:10:13',
    }, {
        status: 'good',
        name: 'lenovo',
        time: 'Connected last 2021-02-01 13:10:13'
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
    const nodeRef = React.useRef(null);
  return (
    <Accordion square className={classes.bg} expanded={state.expand} onChange={handleChange}>
        <AccordionSummary
            aria-controls="panel1d-content"
            expandIcon={<ExpandMoreIcon />}>
        <Typography>{t('networkHistory')}</Typography>
        <Grid  ref={nodeRef}>
            <Typography className={classes.link}>{state.expand?t('collapse'):t('expand')}</Typography>
        </Grid>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container>
                {
                    state.isShowMore ?
                    wifiData.map((wifi, index) => (
                        <Grid key={index} item xs={12} sm={6} md={12} lg={6} xl={6}
                            className={`${classes.wifi} hasShowMore d-flex align-items-center`}>
                            <Grid className='position-relative'>
                                <WifiIcon className={`${classes.wifiIcon} pr-3`} />
                                <CheckCircleIcon className={`${classes.statusIcon} pr-3`} />
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{wifi.name}</Typography>
                                <Typography variant="caption">{wifi.time}</Typography>
                            </Grid>
                        </Grid>
                    ))
                    :
                    wifiData.slice(0, 4).map((wifi, index) => (
                        <Grid key={index} item xs={12} sm={6} md={12} lg={6} xl={6}
                            className={`${classes.wifi} d-flex align-items-center`}>
                            <Grid className='position-relative'>
                                <WifiIcon className={`${classes.wifiIcon} pr-3`} />
                                <CheckCircleIcon className={`${classes.statusIcon} pr-3`} />
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{wifi.name}</Typography>
                                <Typography variant="caption">{wifi.time}</Typography>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </AccordionDetails>
        <Grid container>
            <Button className={`link-button text-capitalize ${classes.link}`} onClick={clickShowMore}>
                {state.isShowMore? <span>{t('showless')}</span> : <span>{t('showmore')}</span>}
            </Button>
        </Grid>
    </Accordion>
  );
}