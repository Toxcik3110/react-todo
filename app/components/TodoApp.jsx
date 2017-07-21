import React from 'react';

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
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		TodoAPI.setTodos(this.state.todos);
	}

	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id:this.state.todos.length+1,
					text:text,
					completed: false,
				}
			],
		})
	}

	handleToggle(id) {
		var todos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
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
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={filteredTodos} todosHandler={this.handleToggle} />
				<AddTodo onSubmitHandler={this.handleAddTodo} />
			</div>
		);
	}
}

export default TodoApp;