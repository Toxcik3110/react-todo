var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each Todo item', () => {
		var todos = [
			{
				id:1,
				text: 'Do something',
			},{
				id:2,
				text: 'Do something',
			}
		];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);
	});
});