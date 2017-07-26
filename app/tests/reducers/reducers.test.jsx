import expect from 'expect';
import df from 'deep-freeze-strict';
import reducers from 'reducers';

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type:'SET_SEARCH_TEXT',
				searchText: 'Some search text',
			};
			var res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		});		
	});
	describe('showCompletedReducer', () => {
		it('should toggle completed', () => {
			var action = {
				type:'TOGGLE_SHOW_COMPLETED',
			};
			var res = reducers.showCompletedReducer(df(false), df(action));
			expect(res).toBe(true);
			res = reducers.showCompletedReducer(df(true), df(action));
			expect(res).toBe(false);
		});		
	});
	// it('should generate add todo action', () => {
	// 	var action = {
	// 		type:'ADD_TODO',
	// 		text: 'Thing to do',
	// 	};
	// 	var res = actions.addTodo('Thing to do');
	// 	expect(res).toEqual(action);
	// });
	// it('should generate toggle todo action', () => {
	// 	var action = {
	// 		type:'TOGGLE_TODO',
	// 		id: 1,
	// 	};
	// 	var res = actions.toggleTodo(1);
	// 	expect(res).toEqual(action);
	// });
	// it('should generate toggle show completed action', () => {
	// 	var action = {
	// 		type:'TOGGLE_SHOW_COMPLETED',
	// 	};
	// 	var res = actions.toggleShowCompleted();
	// 	expect(res).toEqual(action);
	// });
});