import {EventEmitter} from 'events';
import dispatcher from './dispatcher';

class GiphyStore extends EventEmitter{
  constructor (){
    super();
    this.data = [
      {
        data: "Test data yeha!!!",
        id: 0
      },{
        data: "TWO data yeha!!!",
        id: 1
      }
    ]
  }
  getAll(){
    return this.data;
  }
  //function coming from dispatcher
  createData(text){
    const id = Date.now();
    this.data.push({
      data: text,
      id: id
    });
    this.emit('change');

  }
  handleActions(action){
    switch(action.type){
      case "CREATE_DATA" :{
        this.createData(action.text)
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
