import React, { Component } from 'react';
import Header from './header.js';
// import Search from './search.js';
// import GiphyApi from './giphyApi.js';
import GiphyStore from './giph-store.js';
import * as GiphyActions from './actions.js';
import Giphs from './giphs.js';
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: {
        "0": []
      }
    }
    // this.createData = this.createData.bind(this);
  }
  componentWillMount(){
    GiphyStore.on('change', ()=>{
      this.setState({
        data: GiphyStore.getAll()
      })
    })
  }
  render() {
    // console.log("App data in STATE (passed to giph as props): ", typeof this.state.data, "length: ", Object.keys(this.state.data));
    const listItems = this.state.data[0].map((number, i) =>{
        // console.log("Number: ", number)
        // return <img key={`item-${i}`} src={number.images.downsized.url} />
      }
    );
    return (
      <div className="App">
        {listItems}

        <Header />
      <div>
        <input type="text" ref="search" />
      <button onClick={()=>{
         this.searchApi(this.refs.search)
      }} />
      </div>
        {/* <GiphyApi /> */}
      <button onClick={()=>{
          this.callApi("funny cats")
        }}>Call Api</button>
      <Giphs data={this.state.data[0]} />


      </div>
    );
  }

  //calls action which updates the store
  createData(test){
    GiphyActions.createData(test);
  }

  callApi(search){
    GiphyActions.callApi(search);
  }
}




export default App;
