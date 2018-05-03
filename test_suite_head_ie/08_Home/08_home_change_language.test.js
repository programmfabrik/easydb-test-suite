"@fixture 08_Home_Change_Language";
"@page http://10.122.4.25/search/?login=root&password=admin";



"@test"["01_Change_to_English"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "DE"': function() {
        act.click('[data-qa="language-tray-app-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Deutsch (DE)"': function() {
        act.click('[data-qa="language-control-frontend-select"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Englisch (US)"': function() {
        act.click('[data-qa="language-control-frontend-select-en-US-option"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Übernehmen"': function() {
        act.click('[data-qa="language-control-apply-button"] .cui-button-center');
    }
};


"@test"["02_Change_back_to_German"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "DE"': function() {
        act.click('[data-qa="language-tray-app-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "English (EN)"': function() {
        act.click('[data-qa="language-control-frontend-select"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Englisch (US)"': function() {
        act.click('[data-qa="language-control-frontend-select-de-DE-option"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Übernehmen"': function() {
        act.click('[data-qa="language-control-apply-button"] .cui-button-center');
    }
};