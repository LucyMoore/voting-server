//create and export a store:
//import the makestore function from store
import makeStore from './src/store';
import startServer from './src/server';
//make and export the store
export const store = makeStore();
//call the func from server.js
startServer(store);


//load in the entries and dispatch with next
store.dispatch(
{
  type: 'SET_ENTRIES',
  entries: require('./entries.json')

});
console.log("this")
store. dispatch({type: 'NEXT'});

