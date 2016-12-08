import React from 'react';

//Create new element
class SampleComponent extends React.Component{
    render(){
        //React.createElement(outertag, prop, childelement);
        //return React.createElement('h1', null, 'Holla');
        
        //Using JSX
        return <h1>Holla</h1>;
    }
}

//const App2 = () => <h1>Holla</h1>

export default SampleComponent;