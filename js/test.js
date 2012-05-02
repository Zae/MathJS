/**
 *
 */
/*globals MathJS */
(function (window, console, undefined) {
	var average = MathJS.Average([1, 2, 2, 3, 4, 7, 9]),
		median = MathJS.Median([1, 2, 2, 3, 4, 7, 9]),
		median2 = MathJS.Median([1, 2, 2, 3, 4, 7]),
		mode = MathJS.Mode([1, 2, 2, 3, 4, 7, 9]),
		max = MathJS.Max([1, 2, 2, 3, 4, 7, 9]),
		min = MathJS.Min([1, 2, 2, 3, 4, 7, 9]);

	console.log(average);
	console.log(median);
	console.log(median2);
	console.log(mode);
	console.log(max);
	console.log(min);
}(window, console));
