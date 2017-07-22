var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		var todoText = 'test todo';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({ todos:[]});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id:11,
			text: 'Simple todo',
			completed: false,
			createdAt: 0,
			completedAt: undefined,
		}
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({ todos:[todoData]});
		// todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('should toggle todo from completed to incompleted', () => {
		var todoData = {
			id:11,
			text: 'Test todo features',
			completed: true,
			createdAt: 0,
			completedAt: undefined,
		}
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({ todos:[todoData]});
		// todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});
});