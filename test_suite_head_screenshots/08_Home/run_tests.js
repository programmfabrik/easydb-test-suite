const createTestCafe = require('testcafe');

createTestCafe('localhost', 1337, 1338)
	.then(testcafe => {
		const runner = testcafe.createRunner();
		return runner
		.src(['test_suite_head/08_Home/screenshot_cnn.test.js'])
		.browsers(['firefox'])
		.screenshots('screenshots/', takeOnFails = false)
		.run();
	}).then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    
});

//node_modules/.bin/testcafe firefox test_suite_head/08_Home/screenshot_cnn.test.js -r xunit:res.xml -s screenshots/
//node test_suite_head/08_Home/run_tests.js 