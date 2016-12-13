import React from 'react';

class Content extends React.Component{
    constructor(){
        super();
        this.state = { 
            url: "http://lorempixel.com/400/300/food/",
            id: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        }
    }
    render(){
        let ids = this.state.id;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-9 col-xs-12 pull-left">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 pull-right">
                        <form action="" className="search-form">
                            <div className="form-group has-feedback">
                                <label for="search" className="sr-only">Search</label>
                                <input type="text" className="form-control" name="search" id="search" placeholder="search" />
                                <span className="glyphicon glyphicon-search form-control-feedback"></span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    {ids.map(iditem => <Image key={iditem} imageurl={this.state.url + iditem} imageid={iditem} />)}
                </div>
            </div>
        )
    }
}

class Image extends React.Component{
    constructor(){
        super();
        this.state = { likes:[], dislikes:[] }
    }
    like(id){
        let like = this.state;
        let oldvalue = like[id] == undefined ? 0 : like[id];
        like[id] = oldvalue + 1;
        this.setState({likes: like});
    }
    dislike(id){
        let dislike = this.state;
        let oldvalue = dislike[id] == undefined ? 0 : dislike[id];
        dislike[id] = oldvalue + 1;
        this.setState({dislikes: dislike});
    }
    render(){
        let id = this.props.imageid;
        return(
            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                <div className="thumbnail" href="#">
                    <img className="img-responsive" src={this.props.imageurl} alt="" />

                    <div className="caption">
                        <div className="caption-right">
                            <button className="btn btn-primary btn-round btn-sm" ref="like" onClick={() => this.like(id)}>
                                <span className="glyphicon glyphicon-thumbs-up"></span> 
                                <span>{this.state.likes[id] === undefined || null ? 0 : this.state.likes[id]}</span>
                            </button>
                            <button className="btn btn-warning btn-round btn-sm" ref="dislike" onClick={() => this.dislike(id)}>
                                <span className="glyphicon glyphicon-thumbs-down"></span> 
                                <span>{this.state.dislikes[id] === undefined || null ? 0 : this.state.dislikes[id]}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/*function Image(props){
    return(
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <div className="thumbnail" href="#">
                <img className="img-responsive" src={props.imageurl} alt="" />

                <div className="caption">
                    <div className="img-caption">
                        <button className="btn btn-primary btn-round" ref={"like-" + props.imageid} value={props.imageid}>
                            <span className="glyphicon glyphicon-thumbs-up"></span> 10
                        </button>
                        <button className="btn btn-warning btn-round" ref={props.imageid}>
                            <span className="glyphicon glyphicon-thumbs-down"></span> 70
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}*/

export default Content