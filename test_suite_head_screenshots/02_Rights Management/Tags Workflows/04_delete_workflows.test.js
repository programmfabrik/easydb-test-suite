"@fixture 04_Delete Workflows";
"@page http://10.122.4.25/tagmanager/?login=root&password=admin";



"@test"["removeworkflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Workflows"': function() {
        act.click('[tab="transitions"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click div": function() {
        act.click('[row="2"] .ez5-col-admin-transitionform-col-update');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="transition.form.list.minus"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click div": function() {
        act.click('[row="1"] .ez5-col-admin-transitionform-col-update');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="transition.form.list.minus"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click div": function() {
        act.click('[row="1"] .ez5-col-admin-transitionform-col-update');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="transition.form.list.minus"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};