import React from 'react';
import { Photo } from './photo'

export class PhotoGrid extends React.Component{
    render(){
        return(
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}}
            </div>
        )
    }
}