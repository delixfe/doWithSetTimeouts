doWithTimeouts
==============

A short JavaScript to run functions scheduled by setTimeout to circumvent the Internet Explorer 8 "Script is slow" problem.
This script was created for a very specific purpose for one project. Therefore use it on your own risk.

Usage
-----

You can call the function `doWithTimeouts` with any number of functions to run within an own `setTimeout` block:

	function countAMillion () {
		for (var i = 0; i < 1000000; i++) {
		}
	}

	doWithTimeouts(countAMillion, countAMillion, function() { console.log('done counting'); })

*delay*	
The default delay is 150 ms which seems to be a save value at least at my machine. You can configure the default delay:

	doWithTimeouts.delay = 1;

It might make sense to set the delay depending on the browser.