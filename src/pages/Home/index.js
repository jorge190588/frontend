import React, { Component } from 'react';
import {useStyles} from './style';
import {Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const BirdElement =(props)=>{
    let history = useHistory();
    return (
        <Button onClick={()=>{
            history.push("/"+props.name.toString().toLocaleLowerCase())
        }}>{props.name}</Button>
    ) 
}


class Home extends React.Component {
    render() {
        return (
            <div>
               <BirdElement name="Bird"/>
               <BirdElement name="Transition"/>
               <BirdElement name="Keyframes"/>
            </div>
        );
    }
}

export default Home;