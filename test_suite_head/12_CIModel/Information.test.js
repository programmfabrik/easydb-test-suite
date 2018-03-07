
import { Selector } from 'testcafe';




fixture `Information`
    .page `http://10.122.4.25/?login=root&password=admin`;




test('Information', async t => {
    await t
        .wait(5000)
        .click( Selector('[title="root.menu.submenu.zzz_info"] .cui-button-left'))
});