import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://www.deepl.com/translator`;

test('Take a screenshot of a fieldset', async t => {
    await t
        .takeScreenshot('screenshots/screen1.jpg');
});