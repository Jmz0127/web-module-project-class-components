import React from 'react';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	render() {
		return (
			<div>
				<h1>Todo List: MVP</h1>
				<ul>
					<li>Walk Roger</li>
					<li>Take out recycling and trash</li>
					<li>Eat dinner</li>
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
