var _     = require("lodash"), 
	React = require("react"),
	Panel = require("./Panel"),
	Photo = require("./Photo");

var App = React.createClass({
	getInitialState: function() {
		return {
			panels: this.props.panels,
			sliders: this.props.sliderControls
		};
	},
	render: function() {
		return (
			<div className="container">
				<Photo cssVals={this.state.sliders} />
				<div className="controls">
					{this.renderPanels(this.state.panels, this.state.sliders)}
				</div>		
			</div>
		);
	},
	renderPanels: function(panels, sliders) {
		return panels.map(function(panel) {
			var panelSliders = _.where(sliders, {type: panel.name});
			return (
				<Panel 
					collapsePanel={this.collapsePanel}
					isCollapsed={panel.isCollapsed}
					key={panel.name}
					panelName={panel.displayName}
					sliders={panelSliders}
					updateSlider={this.updateSlider} />
			);
		}.bind(this));
	},
	collapsePanel: function(panel) {
		var panels = this.state.panels.slice(),
			changedPanel = _.findWhere(panels, {displayName: panel});

		changedPanel.isCollapsed = !changedPanel.isCollapsed;

		this.setState({
			panels: panels
		});
	},
	updateSlider: function(val, name) {
		var newName = name;

		if (name.indexOf("_") !== -1) {
			newName = name.split("_")[0];
			var childName = name.split("_")[1];
		}

		var nextSliders = this.state.sliders.slice(),
			changedSlider = _.findWhere(nextSliders, {name: newName});

		if (typeof childName !== "undefined") {
			changedSlider = _.findWhere(changedSlider, {name: childName});
		}

		changedSlider.value = val;

		this.setState({
			sliders: nextSliders
		});
	}
});

module.exports = App;