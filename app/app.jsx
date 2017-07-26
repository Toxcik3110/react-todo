import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';
import {Provider} from 'react-redux';
import {setSearchText, addTodo, toggleTodo, toggleShowCompleted} from 'actions';

var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
});

store.dispatch(addTodo('Clean the yard'));
store.dispatch(setSearchText('yard'));
store.dispatch(toggleShowCompleted());

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