import React from 'react';

class SamplepropType extends React.Component{
    render(){
        return <Title text="12345"/>
    }
}
    
const Title = (props) => <h1>Title: { props.text }</h1>

//Define property type
Title.propTypes = {
    //text: React.PropTypes.string.isRequired
    text(props, propName, component){
        //Validation of prop
        if(!(propName in props)){
            return new Error(`missing ${propName}`);
        }
        
        if(props[propName].length < 6){
            return new Error(`${propName} was too short`);
        }
    }
}

export default SamplepropType