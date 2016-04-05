import {List} from 'immutable'
//set an entries key in the state Map, and set the value as the given List of entries
//input entries can be regular JavaScript but must be list immutable by the time it reaches state tree

export function setEntries(state, entries){
  return state.set('entries', List(entries))
}


//merge an update into the old state, where the first two entries are put in one List, and the rest in the new version of entries:
//function names next that takes current state as an argument
export function next(state) {
  //variable entries is set to the entries in the current state
  const entries = state.get('entries')
  // concatenate the winning vote to the entries
    .concat(getWinners(state.get('vote')))
  //return a merge function?
  return state.merge({
    //create a vote Map on state, the first 2 entries are in the key 'pair'
    vote: Map({ pair: entries.take(2)})
    //The entries under vote should no longer be in the entries List?
    entries: entries.skip(2)
  })
}

// When a new vote is cast for an entry, a "tally" for it should appear in the vote
//if tally exists increment it. vote function:
export function vote(state, entry) {
  return state.updateIn(
    //reach inside entry and apply this function there
    ['vote', 'tally', entry],
    // If the value at the end is missing, initialize it with 0".
    0,
    tally => tally + 1
  );
}

