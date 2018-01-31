
import { Selector } from 'testcafe';




fixture `Information`
    .page `http://5.peter.pf-berlin.de/?login=root&password=admin`;




test('Information', async t => {
    await t
        .wait(5000)
        .click('[ez5-loca-key="root.menu.burger"] .cui-button-left')
        .click('[data-qa="root-menu-app-root-menu-about-label"] .cui-button-center');
});