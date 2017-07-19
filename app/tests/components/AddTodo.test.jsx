var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call onSubmitHandler prop with valid data', () => {
		var todoText = 'Check mail';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onSubmitHandler={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.setState({
			value: todoText,
		});
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('should not call onSubmitHandler prop with invalid data', () => {
		var todoText = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onSubmitHandler={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.setState({
			value: todoText,
		});
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});