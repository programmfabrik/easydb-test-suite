"@fixture 01_Administration_Messages";
"@page http://10.122.4.25/adminmessagesmanager/?login=root&password=admin";


"@test"["01_Create_Message"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click +": function() {
        act.click('[data-qa="system-list-manager-plus-button"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Type in input "Titel"': function() {
        act.type('[data-qa="admin-message-title-multi-input"] [cui-data-field-name="de-DE"] input', "Hello World");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in text area "Nachricht"': function() {
        act.type('[data-qa="admin-message-message-multi-input"] [cui-data-field-name="de-DE"]', "This will appear in the following tests");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Type in input "Bestätigungshinweis"': function() {
        act.type('[data-qa="admin-message-confirmation-multi-input"] [cui-data-field-name="de-DE"]', "Select");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Anzeigen"': function() {
        act.click('[data-qa="admin-message-show-preview-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click checkbox": function() {
        act.click(".cui-confirmation-dialog [role='checkbox']");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Gruppen"': function() {
        act.click('[data-qa="system-list-manager-item-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Speichern"': function() {
        act.click('[data-qa="system-list-manager-item-save-button"] .cui-button-center');
    }
}; 


"@test"["02_Test_Message"] = {
    "2.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click span "Select"': function() {
        act.click(":containsExcludeChildren(Select)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};


"@test"["03_Delete_Message"] = {
    "2.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click div "Hello World"': function() {
        act.click(":containsExcludeChildren(Hello World)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".fa.fa-minus");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click ok": function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};