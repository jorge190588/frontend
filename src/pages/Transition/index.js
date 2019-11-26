import React, { useState } from 'react';
import './style.css';

const BoxElement = ()=>{
    const [clicked, setClicked] = useState(false);

    return (
        <div className="body">
            <div className={(clicked) ? "trigger clicked" : "trigger" } onClick={()=>{
                setClicked(!clicked);
             } }>
                <div className="box"></div>
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