import dispatcher from './dispatcher';

export function createData (text){
  //displatches and object with th function name and the data
  dispatcher.dispatch({
    type: "CREATE_DATA",
    text: text,
  })

}
