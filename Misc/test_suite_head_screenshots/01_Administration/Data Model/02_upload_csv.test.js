"@fixture 02_upload csv";
"@page http://10.122.4.25/datamodel/?login=root&password=admin";


"@test"["Upload CSV"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(8e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Click <i>": function() {
        act.click('[data-qa="datamodel-extra-button"] .fa-angle-down');
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "CSV-Upload"': function() {
        act.click(":containsExcludeChildren(CSVUpload)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Upload "easydb-schema-7.csv" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/easydb-schema-7.csv");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Ja"': function() {
        act.click(":containsExcludeChildren(Ja)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click <i>": function() {
        act.click('[data-qa="datamodel-extra-button"] .fa-angle-down');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Änderungen..."': function() {
        act.click(":containsExcludeChildren(Änderungen aktivieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Übernehmen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Übernehmen)").eq(1);
        };
        act.click(actionTarget);
    }
};
