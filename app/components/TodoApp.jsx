import React from 'react';
import moment from 'moment';

import TodoAPI from 'TodoAPI';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos(),
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		TodoAPI.setTodos(this.state.todos);
	}

	handleToggle(id) {
		var todos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}

			return todo;
		});

		this.setState({
			todos: [
			...todos,
			]
		});
	}

	handleSearch(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase(),
		});
	}

	render() {
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodo(todos, showCompleted, searchText);

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