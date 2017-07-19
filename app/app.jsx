import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';

//Load foundation
$(document).foundation();

//APP CSS
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
	<TodoApp />,
	document.getElementById("app")
);