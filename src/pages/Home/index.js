import React, { Component } from 'react';
import {useStyles} from './style';
import {Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const BirdElement =(props)=>{
    let history = useHistory();
    return (
        <Button onClick={()=>{
            history.push("/birds")
        }}>Birds</Button>
    ) 
}


class Home extends React.Component {
    render() {
        return (
            <div>
               <BirdElement/>
            </div>
        );
    }
}

export default Home;