import React from 'react';
import 'bootstrap/less/bootstrap.less'

class Button extends React.Component{
    render(){
        return <a type="button" className="btn btn-danger" href={this.props.opensrc} target="_blank">{this.props.children}</a>
    }
}

class Jumbotron extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1>Welcome to my site!</h1>
                    <p>This is the sample site using React and Bootstrap.<br />
                    Check out the original resource by click the below button.</p>
                    <Button opensrc={"https://www.thinkful.com/projects/react-bootstrap-456/"}>
                        {"View the resource"}
                    </Button>
                </div>
            </div>
        )
    }
}

class AppComponent extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-fixed-top navbar-collapse collapse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <Jumbotron />
            </div>
        )
    }
}

React.render(<AppComponent />, document.getElementById('app'));
