import React, { Component } from 'react';
import {useStyles} from './style';

const BoxElement = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.wrap}>
            <div className={classes.container}>
                <h1>300ms</h1>
                <div className={`${classes.box} ${classes.box1}`}></div>
            </div>
            <div className={classes.container}>
                <h1>1s</h1>
                <div className={`${classes.box} ${classes.box2}`}></div>
            </div>
            <div className={classes.container}>
                <h1>3s</h1>
                <div className={`${classes.box} ${classes.box3}`}></div>
            </div>
        </div>
    )
}

class Home extends React.Component {
    render() {
      return (
        <BoxElement/>
      );
    }
}

export default Home;