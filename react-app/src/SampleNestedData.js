import React from 'react';

class SampleNestedData extends React.Component{
    render(){
        //Render MyButton and Heart component
        return <MyButton>I <Heart /> React</MyButton>
    }
}

//Contain JSX of button and display prop.children
const MyButton = (props) => <button>{ props.children }</button>

class Heart extends React.Component{
    render(){
        return <span>&hearts;</span>
    }
}

export default SampleNestedData