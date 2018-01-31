
import { Selector } from 'testcafe';




fixture `Information`
    .page `http://5.peter.pf-berlin.de/?login=root&password=admin`;




test('Information', async t => {
    await t
        .wait(5000)
        .click( Selector('[title="root.menu.submenu.zzz_info"] .cui-button-left'))
});