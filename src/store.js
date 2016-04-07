//stores the state of the app over time, its the central point of our application
import {createStore} from 'redux';
//the store is initialised with the reducer
import reducer from './reducer';

//The Store will internally use your reducer to apply the actions to the current state
//and store the resulting next state
export default function makeStore() {
  //call create store with reducer
  return createStore(reducer);
}
