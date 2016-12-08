import React from 'react';
import ReactDOM from 'react-dom';

class Inner extends React.Component{
    constructor(){
        super();
        this.state = { val: 0 }
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
        console.log('componentWillMount')
        this.setState({m: 2})
    }
    componentDidMount(){
        console.log('componentDidMount')
        console.log(ReactDOM.findDOMNode(this))
        this.inc = setInterval(this.update, 500)
    }
    render(){
        console.log('render');
        return <button onClick={ this.update }>{ this.state.val * this.state.m }</button>
    }
    componentWillUnmount(){
        console.log('componentWillMount')
        clearInterval(this.inc)
    }
}

class SampleStateInLifeCycle extends React.Component{
    mount(){
        ReactDOM.render(<Inner />, document.getElementById('app'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('app'))
    }
    render(){
        return(
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="app"></div>
            </div>
        )
    }
}

export default SampleStateInLifeCycle