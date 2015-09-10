var React  = require("react"),
	Slider = require("./Slider");

var Sliders = React.createClass({
	render: function() {
		return (
			<div className="slider__wrapper">
				{this.renderSliders(this.props.sliders)}
			</div>
		);
	},
	renderSliders: function(sliders) {
		var sliderProps = this.props.sliders.filter(function(slider) {
			return (typeof slider !== "function" || typeof slider !== "array");
		})[0];


		return sliders.map(function(slider) {
			if (slider.type === "colorSlider" ||
				slider.type === "transformAxis") {

				return (
					<SliderGroup>
						<Slider 
							{...sliderProps}
							updateSlider={this.props.updateSlider} />
					</SliderGroup>
				);
			}

			return (
				<Slider
					{...sliderProps}
					updateSlider={this.props.updateSlider} />
			);
		}.bind(this));
	}
});

module.exports = Sliders;