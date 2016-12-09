import React from 'react';
import ReactDOM from 'react-dom';

class SampleReusable extends React.Component{
    constructor(){
        super();
        this.state = {red: 0, green: 0}
        this.update = this.update.bind(this)
    }
    
    update(e){
        this.setState({red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
                       green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value
                      })
    }
    
    render(){
        return(
            <div>
                <NumInput ref="red" 
                    val={+this.state.red}
                    min={0}
                    max={255}
                    step={0.5}
                    label="red"
                    update={this.update} />
                <br />
                <NumInput ref="green" 
                    val={+this.state.green}
                    min={0}
                    max={255}
                    step={2}
                    label="green"
                    update={this.update} />
            </div>
        )
    }
}

class NumInput extends React.Component{
    render(){
        let label = this.props.label === '' ? '' :
                    <label>{this.props.label} - {this.props.val}</label>
        return(
            <div>
                <input ref="inp" 
                    type={this.props.type} 
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    defaultValue={this.props.val}
                    onChange={this.props.update}/>
                {label}
            </div>
        )
    }
}

NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: '',
    type: "range"
}

export default SampleReusable