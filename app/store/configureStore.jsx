var redux = require('redux');
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export var configure = () => {
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
	});
	var store = redux.createStore(reducer);

	return store;
}