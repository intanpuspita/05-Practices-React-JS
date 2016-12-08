import React from 'react';

class SampleState extends React.Component{
    constructor(){
        //To initialize constructor must be follow by super()
        super();
        
        //Set initial state value
        this.state = {
            text: 'this is my initial state',
            category: 0
        }
    }
        
    update(e){
        //Update state value
        this.setState({ text: e.target.value }) 
    }
        
    render(){
        //Display the state value
        return(
            <div>
                <input type="text" onChange={this.update.bind(this)}/>
                <h1>{ this.state.text } - { this.state.category }</h1>
            </div>
        )
    }
}

export default SampleState