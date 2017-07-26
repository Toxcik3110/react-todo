import moment from 'moment';
import {connect} from 'react-redux';
import React from 'react';
import * as actions from 'actions';

export class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
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
				dispatch(actions.toggleTodo(id));
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

export default connect()(Todo);


// export var Todo = React.createClass({
// 	render:function() {
// 		var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
// 		var todoClassName = completed ? 'todo todo__completed' : 'todo';
// 		var renderDate = () => {
// 			var message = 'Created ';
// 			var timestamp = createdAt;

// 			if(completed) {
// 				message = 'Completed '
// 				timestamp = completedAt;
// 			}

// 			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
// 		}
// 		return (
// 			<div className={todoClassName} onClick={() => {
// 				dispatch(actions.toggleTodo(id));
// 			}}>
// 				<input type="checkbox" checked={completed} />
// 				<div>
// 					<p>{text}</p>
// 					<p className="todo__subtext">{renderDate()}</p>
// 				</div>
// 			</div>
// 		);
// 	}
// });

// module.exports = connect()(Todo);