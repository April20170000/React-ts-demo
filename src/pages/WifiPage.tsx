import React from 'react';
import { useTranslation } from "react-i18next";
import WifiSecurity from './child/WifiSecurity';
import FeatureHeading from '../components/featureHeading';
import cornetIcon from '../assets/icons/coronet-logo.svg';

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

    return (
        <>
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
        </>
    )
}
