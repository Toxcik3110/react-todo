import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';
import {Provider} from 'react-redux';
import {setSearchText, addTodo, toggleTodo, toggleShowCompleted, addTodos} from 'actions';
import TodoAPI from 'TodoAPI';

var store = require('configureStore').configure();

store.subscribe(() => {
	var state = store.getState();
	console.log('New state', state);
	TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();

store.dispatch(addTodos(initialTodos));
// store.dispatch(setSearchText('yard'));
// store.dispatch(toggleShowCompleted());

//Load foundation
$(document).foundation();


//APP CSS
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById("app")
);