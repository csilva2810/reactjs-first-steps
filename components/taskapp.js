var TaskApp = React.createClass({

	getInitialState() {
		return {
			items: [],
			task: ''
		}
	},

	onChangeTaskInput(e) {
		var task = e.target.value;

		this.setState({ task });
	},

	addTask(e) {
		e.preventDefault();

		var items = this.state.items.concat([this.state.task])
		var task = '';

		this.setState({ items, task });
	},

	render() {
		return (
			<div>
				<h1>My Tasks</h1>
				<TaskList items={this.state.items} />

				<form onSubmit={this.addTask}>
					<input type="text" onChange={this.onChangeTaskInput} value={this.state.task} />
					<button>Add Task</button>
				</form>
			</div>
		);
	}

});

React.render(<TaskApp />, document.body);