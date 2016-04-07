import {List, Map} from 'immutable';
//implement initial state
export const INITIAL_STATE = Map();

//set an entries key in the state Map, and set the value as the given List of entries
//input entries can be regular JavaScript but must be list immutable by the time it reaches state tree
export function setEntries(state, entries) {
  console.log(state, 'state')
  return state.set('entries', List(entries));
}

function getWinners(vote) {
  if (!vote) return [];
  const [a, b] = vote.get('pair');
  const aVotes = vote.getIn(['tally', a], 0);
  const bVotes = vote.getIn(['tally', b], 0);
  if      (aVotes > bVotes)  return [a];
  else if (aVotes < bVotes)  return [b];
  else                       return [a, b];
}


//merge an update into the old state, where the first two entries are put in one List, and the rest in the new version of entries:
//function named next that takes current state as an argument
export function next(state) {
  //variable entries is set to the entries in the current state
  const entries = state.get('entries')
  // concatenate the winning vote to the entries
    .concat(getWinners(state.get('vote')))
  //return a merge function?
  return state.merge({
    //create a vote Map on state, the first 2 entries are in the key 'pair'
    vote: Map({ pair: entries.take(2)}),
    //The entries under vote should no longer be in the entries List?
    entries: entries.skip(2)
  })
}

// When a new vote is cast for an entry, a "tally" for it should appear in the vote
//if tally exists increment it. it only needs the vote part of the state
export function vote(voteState, entry) {
  return voteState.updateIn(
    //reach inside entry and apply this function there
    ['tally', entry],
    // If the value at the end is missing, initialize it with 0".
    0,
    //next line?
    tally => tally + 1
  );
}

