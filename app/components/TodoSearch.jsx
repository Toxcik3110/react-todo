import React from 'react';

class TodoSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value:'',
			completed:false,
		};
		this.inputHandler = this.inputHandler.bind(this);
	}

	inputHandler(e) {
		// e.preventDefault();
		this.setState({
			value:e.target.value,
		});
		var showCompleted = this.state.completed;
		var searchText = this.state.value;
		this.props.onSearch(showCompleted, searchText);
	}

	checkboxHandler(e) {
		this.setState({

		});
	}

	render() {
		return (
			<div>
				<div>
					<input type="search" value={this.state.value} placeholder="Search todos" onChange={this.inputHandler} />
				</div>
				<div>
					<label>
						<input type="checkbox" value={this.state.completed} onChange={this.inputHandler} />
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}

export default TodoSearch;