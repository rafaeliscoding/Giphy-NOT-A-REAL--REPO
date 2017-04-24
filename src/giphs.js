import React, {Component} from "react";
import _ from 'lodash';
import LazyLoad from 'react-image-lazy-load';
import GiphyStore from './giph-store.js';
import * as GiphyActions from './actions.js';


class Giphs extends Component{
  constructor (props){
    super(props);
  }
  componentDidMount(){

  }


  render (){

    // console.log("from giphs", this.props.data)
    console.log("giph component::: ", this.props.data);
    let giph = this.props.data.map((g)=>{
      console.log("asdfsadf", g);
    })
    return (
      <div className="masonry">

      </div>
    )

    // this.props.data.map((giph, index)=>{});


    // const giphsT = _.map(this.props.data, (giph, index)=>{
    //   console.log("gihp: ",giph);
    //   let delay = (index*.2);
    //   return <div className="wrapper"  key = {index}>
    //     <img src={giph.images.downsized.url} className="item hover bounce" style={{animationDelay: `${delay}s`}} />
        {/* <LazyLoad
        loaderImage

        originalSrc={giph.images.downsized.url}
        animationDelay = {delay+"s"}
        className="hover no-flick"
        imageProps={{
      src: require('./ring.gif'),
      ref: "image",
      className: "item",

    }} /> */}

  // </div>

      // return <img className="item" style={{"animationDelay": delay+"s"}} key={index} src={giph.images.downsized.url} />
    // });


  }
}


export default Giphs;
