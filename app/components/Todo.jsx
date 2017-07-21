import React from 'react';

class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {text, id, completed} = this.props;
		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" checked={completed} />
				{text}
			</div>
		);
	}
}

export default Todo;