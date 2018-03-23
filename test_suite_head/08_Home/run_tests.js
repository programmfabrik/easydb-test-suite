const createTestCafe = require('testcafe');

createTestCafe('localhost', 1337, 1338)
	.then(testcafe => {
		const runner = testcafe.createRunner();
		return runner
		.src(['test_suite_head/08_Home/screenshots_cnn.test.js'])
		.browsers(['firefox'])
		.screenshots('./screenshots/', true)
		.run();
	}).catch(err => {
	console.log(err);
});