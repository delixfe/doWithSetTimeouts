describe('do with set timout', function () {
	var counter;
	var defaultDelay = doWithTimeouts.delay;

	function incCounter() {
		counter++;
	}

	beforeEach(function () {
		counter = 0;
		doWithTimeouts.delay = defaultDelay; // reset to default
	});

	it('runs one given function', function () {

		runs(function () {
			doWithTimeouts(incCounter);
		});

		waitsFor(function () {
			return counter > 0;
		}, "the counter should be incremented", 500);

		runs(function() {
			expect(counter).toEqual(1);
		});
	});

	it('runs two given functions', function () {

		runs(function () {
			doWithTimeouts(incCounter, incCounter);
		});

		waitsFor(function () {
			return counter > 1;
		}, "the counter should be incremented", 500);

		runs(function() {
			expect(counter).toEqual(2);
		});
	});	

	it('respects set delay', function () {
		runs(function () {
			doWithTimeouts.delay = 0;
			doWithTimeouts(incCounter);
		});

		waitsFor(function () {
			return counter > 0;
		}, "the counter should be incremented faster than the default delay", defaultDelay - 10);
	});

});	