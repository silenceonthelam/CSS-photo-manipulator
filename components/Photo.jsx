var _ 	  = require("lodash"),
	React = require("react");

var Photo = React.createClass({
	render: function() {
		var cssVals = this.props.cssVals;

		var blendModesStyles = this.parseBlendModes(_.where(cssVals, {type: "blendModes"})),
			filtersStyles = this.parseFilters(_.where(cssVals, {type: "filters"})),
			transformStyles = this.parseTransforms(_.where(cssVals, {type: "transforms"}));

		var styles = {
			"WebkitFilter": filtersStyles,
			"transform": transformStyles,
			"backgroundBlendMode": blendModesStyles.blendModes,
			"backgroundColor": blendModesStyles.backgroundColor
		};

		console.log(styles);

		return (
			<section className="stage">
				<div className="img-container" style={styles}></div>
			</section>
		);
	},
	parseBackgroundColor: function(backgroundColor) {
		var r = _.findWhere(backgroundColor, {displayName: "R"}).value,
			g = _.findWhere(backgroundColor, {displayName: "G"}).value,
			b = _.findWhere(backgroundColor, {displayName: "B"}).value,
			a = _.findWhere(backgroundColor, {displayName: "A"}).value;

		return "rgba(" + r + "," +
						 g + "," +
				   		 b + "," +
				   		 a + ")";
	},
	parseBlendModes: function(blendModes) {
		var groups = _.partition(blendModes, {className: "background-color"});

		var blendModes = _.map(groups[1], function(val) {
			if (val.value < 1) {
				return "";
			}
 			return val.className + ", ";
		}, this).join("");

		var separatedBlendModes = blendModes.replace(/, $/, "");
		var bgColor = this.parseBackgroundColor(groups[0]);

		return {"blendModes": separatedBlendModes, "backgroundColor": bgColor};
	},
	parseFilters: function(filters) {
		return _.map(filters, function(val) {
			return val.className + "(" + val.value + val.units + ")";
		}, this).join(" ");
	},
	parseTransforms: function(transforms) {
		return _.map(transforms, function(val) {
			if (val.ignore) {
				return "";
			}
			return val.className + "(" + val.value + val.units + ")";
		}, this).join(" ");
	}
});

module.exports = Photo;