
import { Selector } from 'testcafe';




fixture `Information`
    .page `http://5.peter.pf-berlin.de/?login=root&password=admin`;




test('Information', async t => {
    const body = await Selector('body');
    let text = await body.innerText;
    let text1 = await body[0].innerText;
    console.log(text)
    console.log(text1)

    await t
        .wait(5000)
        .click('body')
        .click('[ez5-loca-key="root.menu.burger"] .cui-button-left')
        .click('[data-qa="root-menu-app-root-menu-about-label"] .cui-button-center');
});