import React from 'react';

class SampleProperties extends React.Component{
    render(){
        let text = this.props.text;
        return <h1>{ text }</h1>
    }
}

//Define prop type and require attribute
SampleProperties.propTypes = {
    text: React.PropTypes.string,
    category: React.PropTypes.number.isRequired
}

//Default property value
SampleProperties.defaultProps = {
    text: "this is my prop text"
}

export default SampleProperties