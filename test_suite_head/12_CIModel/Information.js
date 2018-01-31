
import { Selector } from 'testcafe';




fixture `Information`
    .page `http://5.peter.pf-berlin.de/?login=root&password=admin`;




test('Information', async t => {
    await t
        .wait(5000)
        .click( Selector('[ez5-loca-key="root.menu.burger"]').child('.cui-button-left'))
        .click( Selector('[data-qa="root-menu-app-root-menu-about-label"]').child('.cui-button-center'));
});