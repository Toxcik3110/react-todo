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
				},
				{
					id:2,
					text: 'Clean the yard',
				},
				{
					id:3,
					text: 'Fix children',
				},
				{
					id:4,
					text: 'Cook PC',
				}
			],
			showCompleted: false,
			searchText: '',
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id:this.state.todos.length+1,
					text:text,
				}
			],
		})
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
				<TodoList todos={todos} />
				<AddTodo onSubmitHandler={this.handleAddTodo} />
			</div>
		);
	}
}

export default TodoApp;