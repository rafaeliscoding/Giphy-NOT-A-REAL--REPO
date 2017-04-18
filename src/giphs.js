import React, {Component} from "react";
import _ from 'lodash';
import LazyLoad from 'react-image-lazy-load';

class Giphs extends Component{
  constructor (props){
    super(props);
    this.state={

    }


  }
  componentDidMount(){

  }

  renderImage(imgSrc){
    return (
      <div>
        <img src={imgSrc} />
      </div>
    )
  }

  render (){

    // console.log("from giphs", this.props.data)
    const giphsT = _.map(this.props.data, (giph, index)=>{
      let delay = (index*.2);
      return <div className="wrapper"  key = {index}>
        <img src={giph.images.downsized.url} className="item hover bounce" style={{animationDelay: `${delay}s`}} />
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

  </div>

      // return <img className="item" style={{"animationDelay": delay+"s"}} key={index} src={giph.images.downsized.url} />
    });

    return (
      <div className="masonry">
        {giphsT}
      </div>
    )
  }
}


export default Giphs;
