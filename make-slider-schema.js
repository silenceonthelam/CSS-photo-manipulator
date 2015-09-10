// assumption that each is passed 
// lowercase strings with no more than 
// 1 "-" as per css props being used

function displayNamify(word) {
	if (word.indexOf("-") !== -1) {
		var newWord = word.split("-");
		return newWord[0].charAt(0).toUpperCase() + newWord[0].slice(1) + 
			" " + newWord[1].charAt(0).toUpperCase() + newWord[1].slice(1);
	}

	return word.charAt(0).toUpperCase() + word.slice(1);
}

function humpify(word) {
	if (word.indexOf("-") !== -1) {
		var newWord = word.split("-");
		return newWord[0] + newWord[1].charAt(0).toUpperCase() + newWord[1].slice(1);
	}

	return word; // yo
}

var filters = [{
	maxVal: 100,
	minVal: 0,
	name: "opacity", 
	units: "%",
	val: 100
},{
	maxVal: 1000,
	minVal: 0,	
	name: "saturate", 
	units: "%",
	val: 100
},{
	maxVal: 100,
	minVal: 0,	
	name: "grayscale", 
	units: "%",
	val: 0
},{
	maxVal: 100,
	minVal: 0,	
	name: "sepia", 
	units: "%",
	val: 0
},{
	maxVal: 360,
	minVal: 0,	
	name: "hue-rotate", 
	units: "deg",
	val: 0
},{
	maxVal: 100,
	minVal: 0,	
	name: "invert", 
	units: "%",
	val: 0
},{
	maxVal: 1000,
	minVal: 0,	
	name: "brightness", 
	units: "%",
	val: 100
},{
	maxVal: 1000,
	minVal: 0,	
	name: "contrast", 
	units: "%",
	val: 100
},{
	maxVal: 100,
	minVal: 0,	
	name: "blur", 
	units: "px",
	val: 0
}];

var filterObjs = filters.map(function(filter) {
	return {
		className: filter.name,
		displayName: displayNamify(filter.name),
		maxValue: filter.maxVal,
		minValue: filter.minVal,
		name: humpify(filter.name) + "Filter",
		type: "filters",
		units: filter.units, 
		value: filter.val
	};	
});

var axes = ["x", "y"];
var transforms = [{
	name: "translate",
	maxVal: 100,
	minVal: -100,
	units: "px"
},{
	name: "scale",
	maxVal: 10,
	minVal: 0,
	units: ""
},{	
	name: "skew",
	maxVal: 360,
	minVal: -360,
	units: "deg"
},{
	name: "rotate",
	maxVal: 360,
	minVal: -360,
	units: "deg"
}];

var transformObjs = transforms.map(function(transform) {
	return [{
		className: transform.name,
		displayName: displayNamify(transform.name),
		ignore: true,
		maxValue: transform.maxVal,
		minValue: transform.minVal,
		name: humpify(transform.name) + "Transform",
		type: "transforms",
		units: transform.units,
		value: 0
	}].concat(axes.map(function(axis) {
		var val = 0;

		if (transform.name === "scale") {
			val = 1;
		}

		return {
			className: transform.name + axis.toUpperCase(),
			cssClassModifier: "--group",
			displayName: axis.toUpperCase(),
			maxValue: transform.maxVal,
			minValue: transform.minVal,
			name:  humpify(transform.name) + axis.toUpperCase(),
			type: "transforms",
			units: transform.units,
			value: val
		};
	}));
});

var mergedTransforms = [];
mergedTransforms = mergedTransforms.concat.apply(mergedTransforms, transformObjs);

var colorChannels = ["r","g","b","a"];
var blendModes = [
	"multiply", "screen", "overlay", "darken",
	"lighten", "color-dodge", "color-burn", "hard-light", "soft-light",
	"difference", "exclusion", "hue", "color", "luminosity"
];

var blendObjs = blendModes.map(function(blendMode) {
	return {
		className: blendMode,
		displayName: displayNamify(blendMode),
		isChecked: false,
		maxValue: 100,
		minValue: 0,
		name: humpify(blendMode) + "BlendMode",
		type: "blendModes",
		value: false
	};
});

var colors = colorChannels.map(function(colorChannel) {
	var val = 0,
		maxVal = 255;

	if (colorChannel === "a") {
		maxVal = 1;
		val = 1;
	}

	return {
		className: "background-color",
		cssClassModifier: "--group",
		displayName: displayNamify(colorChannel),
		maxValue: maxVal,
		minValue: 0,
		name: "blendModeColor" + colorChannel.toUpperCase(),
		type: "blendModes",
		value: val
	};
});

var mergedBlends = colors.concat(blendObjs);

var sliderSchema = filterObjs.concat(mergedTransforms.concat(mergedBlends));

module.exports = sliderSchema;