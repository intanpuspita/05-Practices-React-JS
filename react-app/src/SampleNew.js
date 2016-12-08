//Alternative #1
import React from 'react';
//Alternative #2
//var React = require('react');

//Alternative #1
const SampleNew = () => <h1>Hello</h1>
//Alternative #2
/*var App = React.createClass({
    render: function(){
        return <h1>Hello</h1>;
    }
});*/

//Send default component for other js that import this file
//Alternative #1
export default SampleNew
//Alternative #2
//module.exports = App;