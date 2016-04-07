//import the functions and initial state from core
import {setEntries, next, vote, INITIAL_STATE} from "./core"

//function takes an action and a sttate and invokes the core function that matches the action
export default function reducer(state = INITIAL_STATE, action){
  //work out what function to call, and call it
                                                console.log(state, 'action')
  switch(action.type) {
    case 'SET_ENTRIES':
    console.log(state, 'switch statement')
      return setEntries(state, action.entries)
      break;
    case 'NEXT':
      return next(state)
      break;
    case 'VOTE':
    //needs to pick apart the state to just get the vote part
      return state.update('vote',
        voteState => vote(voteState, action.entry));
      break;
  }
  //top level function returns the state
  return state;
}
