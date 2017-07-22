import React from 'react';
import Todo from 'Todo';

class TodoList extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		var {todos, todosHandler} = this.props;
		var renderTodos = (todo) => {
			if(todos.length === 0) {
				return (
					<p className='container__message'>Nothing To Do</p>
				);
			}
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={todosHandler} />
				)
			});
		}
		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
}

export default TodoList;