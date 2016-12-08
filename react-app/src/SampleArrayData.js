import React from 'react';

class SampleArrayData extends React.Component{
    constructor(){
        super();
        this.state = {items: []}
    }
    componentWillMount(){
        fetch('http://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(({results: items}) => this.setState({items}))
    }
    filter(e){
        this.setState({filter: e.target.value})
    }
    render(){
        let items = this.state.items
        
        if(this.state.filter){
            items = items.filter(item => 
                                 item.name.toLowerCase()
                                .includes(this.state.filter.toLowerCase()))
        }
        
        /*return(
            <div>
                {items.map(item => <h4 key={item.name}>{item.name}</h4>)}
            </div>
        )*/
        return(
            <div>
                <input type="text" onChange={this.filter.bind(this)} />
                {items.map(item => <Person key={item.name} person={item} />)}
            </div>
        )
    }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default SampleArrayData