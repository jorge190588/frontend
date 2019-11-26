import React, { useState } from 'react';
import './style.css';
import {Button, Icon} from '@material-ui/core';

const BoxElement = (props)=>{
    return (
        <div>          
            <div className={props.option} ></div>
        </div>
    )
}

class Home extends React.Component {
    constructor(props) {       
        super(props);
        this.state = {option:""}
    }     

    render() {
        return (
            <div>
                <Button onClick={()=>{ this.setState({option:"scale"})}}>Scale</Button>
                <Button onClick={()=>{ this.setState({option:"fromTo"})}}>FromTo</Button>
                <Button onClick={()=>{ this.setState({option:"rotate"})}}>Rotate</Button>
                <Button onClick={()=>{ this.setState({option:"bounce"})}}>Bounce</Button>
                <Button onClick={()=>{ this.setState({option:"fall"})}}>Fall</Button>
                <Button onClick={()=>{ this.setState({option:"rotateFall"})}}>Rotate Fall</Button>
                <Button onClick={()=>{ this.setState({option:"hangingFall"})}}>Hanging Fall</Button>
                <div>
                    <BoxElement option={this.state.option}/>
                </div>
            </div>
        );
    }
}

export default Home;