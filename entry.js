var React = require("react"),
	App = require("./components/App");

require("./styles");

var sliderSchema = require("./make-slider-schema");

var panels = [{
	displayName: "Blend Modes",
	isCollapsed: false,
	name: "blendModes"
},{
	displayName: "Filters",
	isCollapsed: false,
	name: "filters"
},{
	displayName: "Transforms",
	isCollapsed: false,
	name: "transforms"
}];

React.render(<App panels={panels} sliderControls={sliderSchema} />, document.getElementById("app"));