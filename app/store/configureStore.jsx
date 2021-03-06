var redux = require('redux');
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export var configure = (initialState) => {
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
	});
	var store = redux.createStore(reducer, initialState);

	return store;
}