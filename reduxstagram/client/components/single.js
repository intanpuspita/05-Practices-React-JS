import React from 'react';
import { Photo } from './photo';
import { Comment } from './comment';

export class Single extends React.Component{
    render(){
        let postId = this.props.params.postId;
        
        //index of post
        let i = this.props.posts.findIndex((post) => post.code === postId);
        
        //get the post
        let post = this.props.posts[i];
        
        //get the comment
        let postComments = this.props.comments[postId] || [];
        
        return(
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comment postComments={postComments} {...this.props} />
            </div>
        )
    }
}