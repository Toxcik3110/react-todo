import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id:1,
					text: 'Walk the dog',
					completed: false,
				},
				{
					id:2,
					text: 'Clean the yard',
					completed: false,
				},
				{
					id:3,
					text: 'Fix children',
					completed: false,
				},
				{
					id:4,
					text: 'Cook PC',
					completed: false,
				}
			],
			showCompleted: false,
			searchText: '',
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
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
		var {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} todosHandler={this.handleToggle} />
				<AddTodo onSubmitHandler={this.handleAddTodo} />
			</div>
		);
	}
}

export default TodoApp;