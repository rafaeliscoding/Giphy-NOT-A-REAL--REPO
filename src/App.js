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
      data: GiphyStore.getAll()
    }
    // this.createData = this.createData.bind(this);
  }
  render() {
    console.log("store data: ", this.state.data);
    const listItems = this.state.data.map((number) =>
        <li>{number}</li>
);
    return (
      <div className="App">
        {listItems}

        <Header />
        {/* <GiphyApi /> */}
      <button onClick={()=>{
          this.callApi("testing yes!!")
        }}>Call Api</button>
      <Giphs data={this.state.data} />


      </div>
    );
  }

  componentWillMount(){
    GiphyStore.on('change', ()=>{
      this.setState({
        data: GiphyStore.getAll()
      })
    })
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
