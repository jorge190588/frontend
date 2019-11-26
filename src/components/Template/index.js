import React from 'react';
import { Route,  Switch, Link } from 'react-router-dom';
import clsx from 'clsx';
import {  useTheme } from '@material-ui/core/styles';
import { IconButton, Drawer, CssBaseline, AppBar , Toolbar, Typography, Button, Divider, Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Home  from '../../pages/Home/';
import Birds from '../../pages/Birds/';
import {useStyles} from './Style';
import VerticalMenu from './../VerticalMenu';

export default function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
    
  return (

    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}>
        <Toolbar>
            <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
                <Link to="/" className="app-title">
                    Animations and transitions
                </Link>
            </Typography> 
            { props.authenticated ? (
            <div>
                <Button   className={classes.button} color="inherit" 
                        onClick={props.onLogout} > 
                        <Icon className={classes.rightIcon}>lock</Icon>
                        Cerrar sesión
                </Button>
            </div>
          ):(
            <div>
                <Button className={classes.button} color="inherit" to='/login' 
                        component={Link}>
                    <Icon   className={classes.rightIcon}>person</Icon>
                            {"   Iniciar sesión"} </Button>
                <Button className={classes.button} color="inherit"  to='/signup' 
                        component={Link} >
                    <Icon   className={classes.rightIcon}>person_add</Icon>
                            {"   Registro"}  </Button>
            </div>
            )}
            </Toolbar>
        </AppBar>

        <Drawer className={classes.drawer}  variant="persistent"    anchor="left"
                open={open} classes={{  paper: classes.drawerPaper,}}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <VerticalMenu menu={props.menu}></VerticalMenu>
            <Divider />
        
        </Drawer>

        <main className={clsx(classes.content, {  [classes.contentShift]: open,})}>
            <div className={classes.drawerHeader} />
            <Switch>
                <Route exact path="/"   component={Home}/>
                <Route exact path="/birds"   component={Birds}/>
            </Switch>
        </main>
    </div>
  );
}