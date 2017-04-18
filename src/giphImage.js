import React, {Component} from "react";
import GiphImage from './giphImage.js';
import _ from 'lodash';

class GiphImage extends Component{
  constructor (props){
    super(props);
    this.state={

    }





  }

  render (){
    // console.log("from giphs", this.props.data)

    return (
      <img className="item" style={this.props.style} key={this.props.index} src={this.props.src} />
    )
  }
}


export default GiphImage;
