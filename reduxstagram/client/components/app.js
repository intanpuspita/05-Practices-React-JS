import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { Main } from './main';

function mapStateToProps(state){
    return{
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export const App = connect(mapStateToProps, mapDispatchProps)(Main);