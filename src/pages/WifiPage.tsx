import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import WifiSecurity from './child/WifiSecurity';
import FeatureHeading from '../components/featureHeading';
import cornetIcon from '../assets/icons/coronet-logo.svg';


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
        }
    }),
);


export default function WifiPage() {
    const [state, setState] = React.useState({
        checked: true,
    });
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <FeatureHeading 
                heading={`Lenovo WiFi Security`}
                desc={`Lenovo WiFi Security is currently monitoring your WiFi network.`}
                icon={cornetIcon}
            >
            </FeatureHeading>
            <WifiSecurity
                statusText={`enabled`}
                featureName={`WIFI SECURITY`}
                checked={state.checked} />
        </Card>
    )
}
