import React, { Component } from 'react';
import Giphs from './giphs.js';
import GiphyStore from './giph-store.js';
import * as GiphyActions from './actions.js';
import _ from 'lodash';


class Search extends Component {
  constructor(){
    super();
    this.state={
      data: GiphyStore.getAll()
    }
    // this.searchApi = this.searchApi.bind(this);
  }


  render() {
    console.log("component data: ", this.state.data)
    return (
     <div>
          <div className="input-group  form-wrapper">
             <input type="text" className="form-control" placeholder="Search" ref="query" />
           <div className="input-group-btn">
                 <button className="btn btn-default" onClick={()=>{
                    //  this.callApi("test")
                   }}><i className="glyphicon glyphicon-search"></i></button>


             </div>
        </div>
        <Giphs data={this.state.data}/>

    </div>



    );
  }
}

export default Search;
