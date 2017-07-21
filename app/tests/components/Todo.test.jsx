var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

import Todo from 'Todo';

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});
	// describe('render', () => {
	// 	it('should render pause when started', () => {
	// 		var clock = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
	// 		var $el = $(ReactDOM.findDOMNode(clock));
	// 		var $pauseButton = $el.find('button:contains(Pause)');
			
	// 		expect($pauseButton.length).toBe(1);
	// 	});
	it('should call onToggle prop with id on click', () => {
		var todoData = {
			id:199,
			text: 'Simple todo',
			completed: false
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
		var $el = $(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		
		expect(spy).toHaveBeenCalledWith(199);
	});
});