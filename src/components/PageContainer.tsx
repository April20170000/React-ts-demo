import { makeStyles, Theme, createStyles, Grid, Paper, Container, Button, Typography } from "@material-ui/core";
import React from "react";
import MenuBar from "./menu";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import WifiPage from "../pages/WifiPage";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        shiftUp: {
            marginTop: '-3rem',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        header: {
            background: 'linear-gradient(left, #289cd0 0%, #72d0bb 100%)',
            height: '12rem'
        },
        whiteColor: {
            color: '#fff'
        }
    }),
);

function View() {
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${classes.shiftUp}`}>
            <Grid container spacing={3} className={`px-5`}>
                <Grid item xs={12} md={7} lg={8}>
                    <WifiPage />
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Paper className={classes.paper}>
                        右边的内容填充在此
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default function PageContainer(children: any) {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className='p-0 m-0'>
            <MenuBar />
            <div className={`${classes.header} px-5 pt-3 text-left`}>
                <Button className={`${classes.whiteColor} link-button p-0 mb-3`}>
                    <ArrowBackIcon />BACK
                </Button>
                <Typography className={`${classes.whiteColor} `} variant="h3" noWrap>
                    WiFi security
                </Typography>
            </div>
            <View />
        </Container>
    )
}
