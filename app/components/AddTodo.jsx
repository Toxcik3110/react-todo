import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value:'',
		}
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onChangeHandler(e) {
		e.preventDefault;
		this.setState({
			value: e.target.value,
		})
	}

	onSubmitHandler(e) {
		e.preventDefault();
		var {dispatch} = this.props;
		var todoText = this.state.value;
		if (todoText.length > 0) {
			this.setState({
				value:'',
			});
			dispatch(actions.addTodo(todoText))
		} else {
			// console.log(e)
		}
	}

	render() {
		return (
			<div className="container__footer">
				<form onSubmit={this.onSubmitHandler}>
					<input type="text" value={this.state.value} placeholder="What you need to do?" onChange={this.onChangeHandler} />
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddTodo);