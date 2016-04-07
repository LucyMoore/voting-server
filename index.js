//create and export a store:
//import the makestore function from store
import makeStore from './src/store';
import startServer from './src/server'
//make and export the store
export const store = makeStore()
//call the func from server.js
startServer()
