import React from 'react';

class SampleChildUtilities extends React.Component{
    render(){
        return(
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        )
    }
}

class Parent extends React.Component{
    render() {
        //Using this for more than one child data
        //let items = this.props.children.map(child => child)
        
        //let items = React.Children.map(this.props.children, child => child)
        //OR using
        let items = React.Children.toArray(this.props.children);
        
        //Still error
        //let items = React.Children.forEach(this.props.children, child => console.log(this.child.props.className))
        
        //To get single child, return error if more than 1
        //let items = React.Children.only(this.props.children)
        
        console.log(items)
        return null
    }
}

export default SampleChildUtilities