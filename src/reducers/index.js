import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import worldReducer from './world';
import viewReducer from './view';

const rootReducer = combineReducers({
    world: worldReducer,
    view: viewReducer
});

export default rootReducer;
