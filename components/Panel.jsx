var React   = require("react"),
	Sliders = require("./Sliders");

var Panel = React.createClass({
	render: function() {
		var collapsedStyle = this.props.isCollapsed ? "--collapsed" : "";

		return (
			<div className={"panel" + collapsedStyle}>
				<h3 className="panel-head">
					<span className="panel-collapser"
						onClick={this.collapsePanel}>
						{this.props.isCollapsed ? "+" : "-"}
					</span>

					{this.props.panelName}
				</h3>
				<div className="sliders">
					{this.renderSliders(this.props.sliders)}
				</div>
			</div>
		);
	},
	renderSliders: function(sliders) {
		return sliders.map(function(slider, i) {
			return (
				<Sliders
					sliders={[slider]}
					updateSlider={this.props.updateSlider} />
			);
		}.bind(this));
	},
	collapsePanel: function() {
		this.props.collapsePanel(this.props.panelName);
	}
});

module.exports = Panel;