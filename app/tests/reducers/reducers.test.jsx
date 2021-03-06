import expect from 'expect';
import df from 'deep-freeze-strict';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type:'SET_SEARCH_TEXT',
				searchText: 'Some search text',
			};
			var res = searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		});		
	});
	describe('showCompletedReducer', () => {
		it('should toggle completed', () => {
			var action = {
				type:'TOGGLE_SHOW_COMPLETED',
			};
			var res = showCompletedReducer(df(false), df(action));
			expect(res).toBe(true);
			res = showCompletedReducer(df(true), df(action));
			expect(res).toBe(false);
		});		
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type:'ADD_TODO',
				text:'walk the dog',
			};
			var res = todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0].text).toBe(action.text);
		});
		it('should toggle todo', () => {
			var todos = [{
					id:'123',
					text:'Something',
					completed:true,
					createdAt:123,
					completedAt:125
			}];
			var action = {
				type:'TOGGLE_TODO',
				id:'123',
			};
			var res = todosReducer(df(todos), df(action));
			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(undefined);
		});
		it('should add existing todos', () => {
			var todos = [{
					id:'123',
					text:'Something',
					completed:true,
					createdAt:123,
					completedAt:125
			}];
			var action = {
				type:'ADD_TODOS',
				todos,
			};
			var res = todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			// res = todosReducer(df(), df(action));
			expect(res[0]).toEqual(todos[0]);
		});
	});
});