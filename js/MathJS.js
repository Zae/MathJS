/**
 * MathJS library
 *
 * @author Ezra Pool <ezra@tsdme.nl>
 * @version 0.1
 */

window.MathJS = (function (Math, Number, undefined) {
	var FEIGENBAUM_BI = 4.66920160910299,
		FEIGENBAUM_RE = 2.5029078750958926,
		APERY = 1.2020569031595942,
		GOLDEN_RATIO = 1.618033988749895,
		arithmicSort = function (a, b) {
			return a - b;
		},
		sum = function (list) {
			var i = 0,
				sum = 0;

			for (i in list) {
				if (list.hasOwnProperty(i)) {
					sum += list[i];
				}
			}

			return sum;
		},
		average = function (list) {
			return sum(list) / list.length;
		},
		median = function (list) {
			var sortedList = list.sort(arithmicSort),
				halfOfList = list.length / 2;

			if (list.length % 2 === 0) {
				return average([sortedList[halfOfList - 1], sortedList[halfOfList]]);
			} else {
				return sortedList[Math.floor(halfOfList)];
			}
		},
		mode = function (list) {
			var i = 0,
				count = [],
				maxKey = 0,
				max = 0,
				h;

			for (i in list) {
				if (list.hasOwnProperty(i)) {
					if (count[list[i]] === undefined) {
						count[list[i]] = 1;
					} else {
						count[list[i]]++;
					}
				}
			}

			for (i in count) {
				if (count.hasOwnProperty(i)) {
					if ((h = Math.max(count[i], max)) > max) {
						max = h;
						maxKey = i;
					}
				}
			}

			return list[maxKey];
		},
		max = function (list) {
			var i,
				max = Number.NEGATIVE_INFINITY;

			for (i in list) {
				if (list.hasOwnProperty(i)) {
					max = Math.max(list[i], max);
				}
			}
			return max;
		},
		min = function (list) {
			var i,
				min = Number.POSITIVE_INFINITY;

			for (i in list) {
				if (list.hasOwnProperty(i)) {
					min = Math.min(list[i], min);
				}
			}
			return min;
		};

	//public API
	return {
		FEIGENBAUM_BI: FEIGENBAUM_BI,
		FEIGENBAUM_RE: FEIGENBAUM_RE,
		APERY: APERY,
		GOLDEN_RATIO: GOLDEN_RATIO,
		Average: average,
		Sum: sum,
		Mean: average,
		Median: median,
		Mode: mode,
		Max: max,
		Min: min
	};
}(Math, Number));