import {EventEmitter} from 'events';
import dispatcher from './dispatcher';
import Request from 'superagent';

class GiphyStore extends EventEmitter{
  constructor (){
    super();
    this.data=[]

  }
  getAll(){
    return this.data;
  }
  //function coming from dispatcher
  // createData(text){
  //   const id = Date.now();
  //   this.data.push({
  //     data: text,
  //     id: id
  //   });
  //   this.emit('change');
  //
  // }
  searchApi(search){
    const api="api_key=dc6zaTOxFJmzC";
    this.data.splice(0,this.data.length);
    // let search = this.refs['query'].value;
    // console.log(search);
    let url =`http://api.giphy.com/v1/gifs/search?q=${search}&`+api;
    // let url ="http://www.omdbapi.com/?i=tt0944947&Season=1";
    Request.get(url)
    .set('Accept', 'application/json')
    .end((err, res, index)=>{
      console.log("STORE data length: ", res.length);
      console.log("STORE data: ", res);
      if (err){
        console.log("error: ", err)
      }
      this.data.push(res.body.data);

      // console.log(this.data);
      this.emit('change');
    });
  }
  handleActions(action){
    switch(action.type){
      case "CREATE_DATA" :{
        this.createData(action.text)
      }
      case "CALL_API" :{
        this.searchApi(action.text)
      }
    }
    // console.log(action);
  }

}
const giphStore =  new GiphyStore;




export default giphStore;
dispatcher.register(giphStore.handleActions.bind(giphStore));
// dispatcher.register(giphStore.handleActions);
// window.dispatcher = dispatcher;
