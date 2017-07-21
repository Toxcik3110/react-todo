var $ = require('jquery'); 

export default {
	setTodos: function(todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos))
			return todos;
		}
	},
	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];
		try {
			todos = JSON.parse(stringTodos);
		} catch(e) {

		}

		return $.isArray(todos) ? todos : [];
	},
	filterTodo: function(todos, showCompleted, searchText) {
		var filteredTodos = todos;

		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});

		filteredTodos = filteredTodos.filter((todo) => {
			return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText)>=0 ? true : false;
		})

		filteredTodos.sort((a,b) => {
			return !a.completed ? (b.completed ? -1 : 0) : 1 ;
		})

		return filteredTodos;
	}	
}