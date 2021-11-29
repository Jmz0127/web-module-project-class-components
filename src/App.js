import React from 'react';

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
	render() {
		const { todos } = this.state;
		return (
			<div>
				<h1>Todo List: MVP</h1>
				<ul>
					{todos.map((todo) => {
						return (
							<li>
								{todo.task} {todo.completed ? <span>- completed</span> : <span></span>}
							</li>
						);
					})}
				</ul>

				<form>
					<input />
					<button>Add</button>
				</form>
				<button>Clear</button>
			</div>
		);
	}
}

export default App;
