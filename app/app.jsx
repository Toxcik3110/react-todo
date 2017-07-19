import React from 'react';
import ReactDOM from 'react-dom';
// import Main from './components/Main';

//Load foundation
$(document).foundation();

//APP CSS
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
	<div>Boilerplate 3 project<div/>,
	document.getElementById("app")
);