import expect from 'expect';
import actions from 'actions';

describe('Actions', () => {
	it('should generate search text action', () => {
		var action = {
			type:'SET_SEARCH_TEXT',
			searchText: 'Some search text',
		};
		var res = actions.setSearchText('Some search text');
		expect(res).toEqual(action);
	});
	it('should generate add todo action', () => {
		var action = {
			type:'ADD_TODO',
			text: 'Thing to do',
		};
		var res = actions.addTodo('Thing to do');
		expect(res).toEqual(action);
	});
	it('should generate toggle todo action', () => {
		var action = {
			type:'TOGGLE_TODO',
			id: 1,
		};
		var res = actions.toggleTodo(1);
		expect(res).toEqual(action);
	});
	it('should generate toggle show completed action', () => {
		var action = {
			type:'TOGGLE_SHOW_COMPLETED',
		};
		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	});
});