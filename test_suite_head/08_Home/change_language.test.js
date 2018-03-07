"@fixture Change_Language";
"@page http://10.122.4.25/search/?login=root&password=admin";



"@test"["01_Change to English"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "DE"': function() {
        act.click('[data-qa="language-tray-app-button"] .cui-button-center');
    },
    '3.Click span "Deutsch (DE)"': function() {
        act.click('[data-qa="language-control-frontend-select"] .cui-button-center');
    },
    '4.Click span "Englisch (US)"': function() {
        act.click('[data-qa="language-control-frontend-select-en-US-option"] .cui-button-center');
    },
    '5.Click span "Übernehmen"': function() {
        act.click('[data-qa="language-control-apply-button"] .cui-button-center');
    }
};


"@test"["02_Change back to German"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "DE"': function() {
        act.click('[data-qa="language-tray-app-button"] .cui-button-center');
    },
    '3.Click span "English (EN)"': function() {
        act.click('[data-qa="language-control-frontend-select"] .cui-button-center');
    },
    '4.Click span "Englisch (US)"': function() {
        act.click('[data-qa="language-control-frontend-select-de-DE-option"] .cui-button-center');
    },
    '5.Click span "Übernehmen"': function() {
        act.click('[data-qa="language-control-apply-button"] .cui-button-center');
    }
};