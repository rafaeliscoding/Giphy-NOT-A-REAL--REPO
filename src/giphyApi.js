import React, {Component} from "react";
import Request from 'superagent';
import Giphs from './giphs.js';
import Search from './search.js';
import _ from 'lodash';

class GiphyApi extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
    // this.searchApi = this.searchApi.bind(this);
  }

  componentWillMount(){
    // this.loadApi();


  }
  componentDidMount(){
    // this.loadApi("funny");
  }

  render (){
    // this.loadApi();

    // const movieT = _.map(this.state.data, (movie, index)=>{
    //   return <p key={index}>{movie.Title}</p>
    // })
    // console.log("state", this.state.data);

    return (
      <div>
        {/* <h2>{movieT}</h2> */}
        {/* <button onClick={this.loadApi}>Api Data!!</button> */}
        {/* <Search /> */}

      </div>
    )
  }
}


export default GiphyApi;
