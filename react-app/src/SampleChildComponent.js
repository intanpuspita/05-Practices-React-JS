import React from 'react';

class SampleChildComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            text: 'this is my initial state'
        }
    }
        
    update(e){
        this.setState({ text: e.target.value }) 
    }
        
    render(){
        return(
            <div>
                //Render component 'Widget' and pass the prop
                <Widget eventhandler={this.update.bind(this)}/>
                <h1>{ this.state.text }</h1>
            </div>
        )
    }
}

const Widget = (props) => 
    <input type="text" onChange={props.eventhandler}/>

export default SampleChildComponent