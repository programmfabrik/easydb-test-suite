
import { Selector } from 'testcafe';




fixture `Information`
    .page `http://10.122.4.25/?login=root&password=admin`
    .beforeEach(t => t.resizeWindow(1920, 1080));




test('Information', async t => {
    const body = await Selector('body');
    let text = await body.innerText;
    console.log(text)

    await t
        .wait(5000)
        .click('body')
        .click('[ez5-loca-key="root.menu.burger"] .cui-button-left')
        .click('[data-qa="root-menu-app-root-menu-about-label"] .cui-button-center');
});