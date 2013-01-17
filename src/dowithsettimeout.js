/*
*   doWithTimeouts
*   Created By delixfe (https://github.com/delixfe)
*
*   Source: https://github.com/delixfe/doWithSetTimeouts
*   MIT License: http://www.opensource.org/licenses/MIT
*/

var doWithTimeouts = function () {

	var delay = doWithTimeouts.delay;
	doWithTimeoutsRecursive(arguments, 0);

	function doWithTimeoutsRecursive(fns, index) {
		setTimeout(function () { 
			fns[index]();
			index++;
			if(index < fns.length) {
				doWithTimeoutsRecursive(fns, index);
			}	
		}, delay);
	}
};

doWithTimeouts.delay = 150;