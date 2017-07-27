import React from 'react';
import moment from 'moment';

import TodoAPI from 'TodoAPI';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 className='page-title'>Todo App</h1>
				<div className="grid-x grid-margin-x">
					<div className="auto cell"></div>
					<div className="medium-6 large-4 cell container">
						<TodoSearch />
						<TodoList />
						<AddTodo />
					</div>
					<div className="auto cell"></div>
				</div>
			</div>
		);
	}
}

export default TodoApp;