import React from 'react';
import { browserHistory } from 'react-router';

export class User extends React.Component{
    onChangeNavigation(){
        browserHistory.push("/home");
    }
    
    render(){
        return(
            <div>
                <h3>The User Page</h3>
                <p>User ID : {this.props.params.id}</p>
                <button onClick={this.onChangeNavigation} className="btn btn-primary">Go Home!</button>
            </div>
        )
    }
}