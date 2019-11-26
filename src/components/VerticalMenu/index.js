import React from 'react';
import Group from './../Group';
import ListItemLink from './../ListItemLink';
import { Divider } from '@material-ui/core';

export default function ListMenu(props) {
  

  return ( 
    <div>
        {(props.menu!=null) ?
            Object.keys(props.menu).map(key => 
            <Group key={key} group={props.menu[key]}></Group>    
            ) : null
        }
        <Divider />
        <ListItemLink  key='help' to='/help' primary="Ayuda" icon='help' isNested={false}></ListItemLink>
    </div>
    );
  
}