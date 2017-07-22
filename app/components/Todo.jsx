import moment from 'moment';
import React from 'react';

class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {text, id, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? 'todo todo__completed' : 'todo';
		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;

			if(completed) {
				message = 'Completed '
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}
		return (
			<div className={todoClassName} onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" checked={completed} />
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
}

export default Todo;