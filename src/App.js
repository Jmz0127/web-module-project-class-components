import React from 'react';

class Todo extends React.Component {
	render() {
		return (
			<li>
				{this.props.todo.task} {this.props.todo.completed ? <span>- completed</span> : <span></span>}
			</li>
		);
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo) => {
					return <Todo todo={todo} />;
				})}
			</ul>
		);
	}
}

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			input: ''
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAdd(this.state.input);
	};

	handleChange = (e) => {
		this.setState({
			...this.state,
			input: e.target.value
		});
	};

	render() {
		return (
			<form>
				<input onChange={this.handleChange} />
				<button onClick={this.handleSubmit}>Add</button>
			</form>
		);
	}
}

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todos: [
				{
					task: 'Organize Garage',
					id: 1528817077286,
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: 1528817084358,
					completed: false
				},
				{
					task: 'Walk Roger',
					id: 1528817084359,
					completed: false
				},
				{
					task: 'Take out recycling and trash',
					id: 1528817084357,
					completed: false
				}
			]
		};
	}

	handleAdd = (task) => {
		//1. set state
		//2. change todos
		//3. make a copy todos
		//4. add a new todo to the end of our todo list

		const newTodo = {
			task: task,
			id: Date.now(),
			completed: false
		};

		this.setState({
			...this.state,
			todos: [...this.state.todos, newTodo]
		});
	};

	handleClear = () => {
		//1. set state
		//2. loop through all of the todos
		//3. remove all todos that have been completed === true
		//4. save filtered todos to state

		this.setState({
			...this.state,
			todos: this.state.todos.filter((todo) => {
				return todo.completed === false;
			})
		});
	};

	render() {
		const { todos } = this.state;
		return (
			<div>
				<h1>Todo List: MVP</h1>
				<TodoList todos={todos} />
				<TodoForm handleAdd={this.handleAdd} />
				<button onClick={this.handleClear}>Clear</button>
			</div>
		);
	}
}

export default App;
