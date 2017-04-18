import React, { Component } from 'react';
import Header from './header.js';
import Search from './search.js';
import GiphyApi from './giphyApi.js';
import './App.css';
import GiphyStore from './giph-store.js';
import * as GiphyActions from './actions.js';
import _ from 'lodash';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: GiphyStore.getAll(),
    }
    // this.createData = this.createData.bind(this);
  }
  render() {
    let data = _.map(this.state.data, (item)=>{
      return <h2 style={{color: 'white'}} key={item.id}>{item.data}</h2>
    })
    return (
      <div className="App">
        {data}
        <Header />
        <GiphyApi />
      <button onClick={()=>{
          this.createData("testing yes!!")
        }}>Create Data</button>

      </div>
    );
  }

  componentWillMount(){
    GiphyStore.on('change', ()=>{
      this.setState({
        data: GiphyStore.getAll(),
      })
    })
  }
  //calls action which updates the store
  createData(test){
    GiphyActions.createData(test);
    }
  }




export default App;
