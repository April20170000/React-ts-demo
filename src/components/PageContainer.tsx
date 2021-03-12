import { makeStyles, Theme, createStyles, Grid, Paper, Container, Button, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { menu } from "../route";
import { Route, Switch, useHistory} from "react-router-dom";


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
            textAlign: 'left',
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
        <Grid container spacing={3} className={`px-5 ${classes.root} ${classes.shiftUp}`}>
            <Grid item xs={12} md={7} lg={8}>
                <Paper className={classes.paper}>
                    <Switch>
                        {menu.map((route, index) => (
                            <Route key={index}
                                path={route.path}
                                exact={route.exact}
                                children={route.left} />
                        ))}
                    </Switch>
                </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Paper className={classes.paper}>
                    <Switch>
                        {menu.map((route, index) => (
                            <Route key={index}
                                path={route.path}
                                exact={route.exact}
                                children={route.right} />
                        ))}
                    </Switch>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default function PageContainer() {
    const { t } = useTranslation();
    const classes = useStyles();
    let history = useHistory();
    const back = () => {
        history.goBack();
    }
    return (
        <Container maxWidth={false} className='p-0 m-0'>
            <div className={`${classes.header} px-5 pt-3 text-left`}>
                <Button className={`${classes.whiteColor} link-button p-0 mb-3`}
                    onClick={back}>
                    <ArrowBackIcon />{t('back')}
                </Button>
                <Switch>
                    {menu.map((route, index) => (
                        <Route key={index}
                            path={route.path}
                            exact={route.exact}>
                            <Typography key={`title-${index}`} className={`${classes.whiteColor} `} variant="h3" noWrap>
                                {t(route.title)}
                            </Typography>
                        </Route>
                    ))}
                </Switch>
            </div>
            <View />
        </Container>
    )
}
