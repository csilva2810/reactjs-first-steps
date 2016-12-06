var Avatar = React.createClass({

	getDefaultProps() {
		return {
			path: 'http://byrushan.com/projects/ma/1-7-1/jquery/light/img/demo/profile-pics/1.jpg'
		}
	},

	render() {
		return (
			<a href={this.props.path}>
				<img src={this.props.path} />
			</a>
		);
	}

});

React.render(<Avatar />, document.body);