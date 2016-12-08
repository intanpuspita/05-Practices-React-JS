import React from 'react';
import ReactDOM from 'react-dom';

class SampleGetReference extends React.Component {
    constructor(){
        super();
        this.state = {a: ''}
    }
    
    update(e){
        this.setState({
            //Get refs value
            a: this.a.value,
            b: this.refs.b.value,
            
            //Get refs value from other component
            //c: ReactDOM.findDOMNode(this.c).value
            //or,
            c: this.c.refs.input.value
        })
    }
    
    render(){
        //a & b -> Get refs value 
        //c -> Reference instance from another component
        return(
            <div>
                <input 
                    ref={ node => this.a = node }
                    type="text"
                    onChange={this.update.bind(this)}
                />{this.state.a}
                <hr />
                <input 
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                />{this.state.b}
                <hr />
                <Input 
                    ref={ component => this.c = component }
                    update={this.update.bind(this)}
                />{this.state.c}
            </div>
        )
    }
}

//Component with new refs
class Input extends React.Component{
    render(){
        return <input ref="input" type="text" onChange={this.props.update} />
    }
}

export default SampleGetReference