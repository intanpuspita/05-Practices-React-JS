import React from 'react';
import ReactDOM from 'react-dom';
import SampleNew from './SampleNew';
import SampleComponent from './SampleComponent';
import SampleMultipleJSX from './SampleMultipleJSX';
import SampleProperties from './SampleProperties';
import SampleState from './SampleState';
import SampleChildComponent from './SampleChildComponent';
import SampleNestedData from './SampleNestedData';
import SamplepropType from './SamplepropType';
import SampleSyntheticEvent from './SampleSyntheticEvent';
import SampleGetReference from './SampleGetReference';
import SampleComponentLifeCycle from './SampleComponentLifeCycle';
import SampleStateInLifeCycle from './SampleStateInLifeCycle'; 
import SampleComponentUpdate from './SampleComponentUpdate';
import SampleArrayData from './SampleArrayData';
import SampleHigherOrderComp from './SampleHigherOrderComp';
import SampleChildUtilities from './SampleChildUtilities';
import SampleCloneElement from './SampleCloneElement';
import SampleReusable from './SampleReusable';

var sampleNumber = 18;

class MyElement extends React.Component{
    render(){
        return(
            <div>
                <span>{ sampleNumber === 1 && <SampleNew />}</span>
                <span>{ sampleNumber === 2 && <SampleComponent />}</span>
                <span>{ sampleNumber === 3 && <SampleMultipleJSX />}</span>
                <span>{ sampleNumber === 4 && <SampleProperties category={5}/>}</span>
                <span>{ sampleNumber === 5 && <SampleState />}</span>
                <span>{ sampleNumber === 6 && <SampleChildComponent />}</span>
                <span>{ sampleNumber === 7 && <SampleNestedData />}</span>
                <span>{ sampleNumber === 8 && <SamplepropType />}</span>
                <span>{ sampleNumber === 9 && <SampleSyntheticEvent />}</span>
                <span>{ sampleNumber === 10 && <SampleGetReference />}</span>
                <span>{ sampleNumber === 11 && <SampleComponentLifeCycle />}</span>
                <span>{ sampleNumber === 12 && <SampleStateInLifeCycle />}</span>
                <span>{ sampleNumber === 13 && <SampleComponentUpdate />}</span>
                <span>{ sampleNumber === 14 && <SampleArrayData />}</span>
                <span>{ sampleNumber === 15 && <SampleHigherOrderComp />}</span>
                <span>{ sampleNumber === 16 && <SampleChildUtilities />}</span>
                <span>{ sampleNumber === 17 && <SampleCloneElement />}</span>
                <span>{ sampleNumber === 18 && <SampleReusable />}</span>
            </div>
        );
    }
}

//Render component App into div id = root
ReactDOM.render(
  <MyElement />,
  document.getElementById('root')
);
