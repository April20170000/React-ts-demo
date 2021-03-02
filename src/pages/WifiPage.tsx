import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();
    const texts = {
        heading: t('title'),
        desc: t('enabledDescribe'),
        featureName: t('name')
    }
    const [state ] = React.useState({
        checked: true,
    });
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <FeatureHeading 
                heading={texts.heading}
                desc={texts.desc}
                icon={cornetIcon}
            >
            </FeatureHeading>
            <WifiSecurity
                statusText={t('enable')}
                featureName={texts.featureName}
                checked={state.checked} />
        </Card>
    )
}
