import {List, Map} from 'immutable';

export function setEntries(state){
    const entries = state.get('entries');
    return state.set('entries', entries);
}