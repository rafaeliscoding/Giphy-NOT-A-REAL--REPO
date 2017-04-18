import React, { Component } from 'react';
import Request from 'superagent';
import Giphs from './giphs.js';
import _ from 'lodash';


class Search extends Component {
  constructor(){
    super();
    this.state={
      data: null
    }
    this.searchApi = this.searchApi.bind(this);
  }
  searchApi(){
    this.setState({
      data: null
    });
    const api="api_key=dc6zaTOxFJmzC";
    let search = this.refs['query'].value;
    console.log(search);
    let url =`http://api.giphy.com/v1/gifs/search?q=${search}&`+api;
    // let url ="http://www.omdbapi.com/?i=tt0944947&Season=1";
    Request.get(url)
    .set('Accept', 'application/json')
    .end((err, res)=>{
      // console.log(res.body.data);
      if (err){
        console.log("error: ", err)
      }

      this.setState({
        data: res.body.data
      });
      // console.log(this.state.data);
    });
  }
  render() {
    return (
     <div>
          <div className="input-group  form-wrapper">
             <input type="text" className="form-control" placeholder="Search" ref="query" />
           <div className="input-group-btn">
                 <button className="btn btn-default" onClick={()=>{this.searchApi()}}><i className="glyphicon glyphicon-search"></i></button>
             </div>
        </div>
        <Giphs data={this.state.data}/>

    </div>



    );
  }
}

export default Search;
