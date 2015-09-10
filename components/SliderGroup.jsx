var React = require("react");

var SliderGroup = React.createClass({
	render: function() {
		return (
			<div className="slider-group">
				{this.props.children}
			</div>
		);
	}
});

module.exports = SliderGroup;