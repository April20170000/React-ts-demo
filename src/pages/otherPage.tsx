import { Typography } from "@material-ui/core";
import { Translation } from 'react-i18next';

export default function OtherPage() {
    return (
        <Translation>
        {
            t => <Typography>{t('message')}</Typography>
        }
        </Translation>
    )
}

