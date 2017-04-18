import React, {Component} from "react";
import Request from 'superagent';
import _ from 'lodash';

class GiphyApi extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
    // this.loadApi = this.loadApi.bind(this);
  }




  componentWillMount(){
    // this.loadApi();


  }

  render (){
    const data = this.state.data;
    const listItems = data.map((giph) =>
      <li key={number.toString()}>
        {giph.images.downsized.url}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}


export default GiphyApi;
