import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import {Todo} from 'Todo';

// var store = require('configureStore').configure();

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});
	it('should call TOGGLE_TODO prop with id on click', () => {
		var todoData = {
			id:199,
			text: 'Simple todo',
			completed: false
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
		// var todo = TestUtils.renderIntoDocument(
		// 	<Provider store={store}>
		// 		{() => <Todo {...todoData} dispatch={spy} />}
		// 	</Provider>
		// );
		var $el = $(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		
		expect(spy).toHaveBeenCalledWith({
			type: 'TOGGLE_TODO',
			id: todoData.id,
		});
	});
});