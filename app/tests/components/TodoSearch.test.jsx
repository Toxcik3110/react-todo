var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with entered input text', () => {
		var searchText = 'Dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.setState({
			searchText: searchText,
		});
		TestUtils.Simulate.change($el.find('input')[0]);

		expect(spy).toHaveBeenCalledWith(false, searchText);
	});

	it('should call onSearch with proper checked value', () => {
		var completed = true;
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoSearch));

		todoSearch.setState({
			completed: completed,
		});
		TestUtils.Simulate.change($el.find('input')[1]);

		expect(spy).toHaveBeenCalledWith(completed, '');
	});
});