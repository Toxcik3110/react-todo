import React from 'react';

class TodoSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchText:'',
			completed:false,
		};
		this.inputHandler = this.inputHandler.bind(this);
		this.callSearch = this.callSearch.bind(this);
		this.checkboxHandler = this.checkboxHandler.bind(this);
	}

	inputHandler(e) {
		this.setState({
			searchText: e.target.value,
		});
		this.callSearch();
	}

	callSearch() {
		var showCompleted = this.state.completed;
		var searchText = this.state.searchText;
		this.props.onSearch(showCompleted, searchText);
	}

	checkboxHandler() {
		this.setState({
			completed: !this.state.completed,
		});
		this.callSearch();
	}

	render() {
		return (
			<div className="container__header">
				<div>
					<input type="search" value={this.state.searchText} placeholder="Search todos" onChange={this.inputHandler} />
				</div>
				<div>
					<label>
						<input type="checkbox" checked={this.state.completed} onChange={this.checkboxHandler} />
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}

export default TodoSearch;