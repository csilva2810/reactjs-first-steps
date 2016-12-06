var Counter = React.createClass({

	getInitialState() {
		return {
			count: 0
		}
	},

	add() {
		this.setState({
			count: this.state.count + 1
		}); 
	},

	subtract() {
		this.setState({
			count: this.state.count - 1
		}); 
	},

	render() {
		return (
			<div>
				<h1>Counter: {this.state.count}</h1>

				<button onClick={this.subtract}>Subtract 1</button>
				<button onClick={this.add}>Add 1</button>
			</div>
		);
	}

});

React.render(<Counter />, document.body);