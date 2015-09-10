var React = require("react");

var Slider = React.createClass({
	render: function() {
		var classModifier = "";

		if (this.props.cssClassModifier) {
			classModifier = this.props.cssClassModifier;
		}

		if (this.props.ignore === true) {
			return (
				<label className={"slider-label--header" + classModifier}>
					<span className={"slider-label-text--header" + classModifier}>
						{this.props.displayName}
					</span>
				</label>
			);
		}

		if (this.props.type === "blendModes" && 
			this.props.className !== "background-color") {

			return (
				<label className={"checkbox-label" + classModifier}>
					<span className={"checkbox-label-text" + classModifier}>
						{this.props.displayName}
					</span>
					<input 
						checked={this.props.value}
						className={"checkbox" + classModifier}
						name={this.props.name}
						onChange={this.updateCheckbox}
						step={this.props.step}
						type="checkbox"
						value={this.props.value} />
				</label>
			);
		}

		var stepVal = 1;

		if (this.props.name === "blendModeColorA") {
			stepVal = .1;
		}

		return (
			<label className={"slider-label" + classModifier}>
				<span className={"slider-label-text" + classModifier}>
					{this.props.displayName}
				</span>
				<input 
					className={"slider" + classModifier}
					max={this.props.maxValue}
					min={this.props.minValue}
					name={this.props.name}
					onChange={this.updateSlider}
					step={stepVal}
					type="range" 
					units={this.props.units}
					value={this.props.value} />
				<span className={"slider-val" + classModifier}>{this.props.value}</span>
			</label>
		);
	},
	updateCheckbox: function(e) {
		this.props.updateSlider(!this.props.value, this.props.name);
	},
	updateSlider: function(e) {
		this.props.updateSlider(e.target.value, this.props.name);
	}
});

module.exports = Slider;