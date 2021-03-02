import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

export default function FeatureHeading(props: any) {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container className={`justify-content-between align-items-center mb-3`}>
                <Grid item xs>
                    <Typography className={`${classes.mainColor} `} variant="h4" noWrap>
                        {props.heading}
                    </Typography>
                </Grid>
                <Grid item xs={3} className={`text-center`}>
                    <img src={props.icon} className={classes.img} alt="" />
                </Grid>
            </Grid>
            <Typography className={`${classes.mainColor} mb-3`} variant="body1" noWrap>
                {props.desc}
            </Typography>
        </React.Fragment>
    )
}