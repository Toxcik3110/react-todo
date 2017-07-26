export default {
	setSearchText: function(searchText){
		return {
			type:'SET_SEARCH_TEXT',
			searchText,
		}
	},

	addTodo: function(text) {
		return {
			type: 'ADD_TODO',
			text,	
		}
	},

	toggleTodo: function(id) {
		return {
			type: 'TOGGLE_TODO',
			id,	
		}
	},

	toggleShowCompleted: function() {
		return {
			type: 'TOGGLE_SHOW_COMPLETED',
		}
	},
}