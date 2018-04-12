"@fixture 01_Administration_Data_Model";
"@page http://10.122.4.25/datamodel/?login=root&password=admin";



"@test"["01_Upload_JSON"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(8e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Click <i>": function() {
        act.click('[data-qa="datamodel-extra-button"] .fa-angle-down');
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "CSV-Upload"': function() {
        act.click(":containsExcludeChildren(Datenmodell hochladen JSON)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Upload "easydb-schema-7.csv" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/easydb-peter-datamodel-HEAD-10.json");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Ja"': function() {
        act.click(":containsExcludeChildren(ok)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Neu Laden"': function() {
        act.click(":containsExcludeChildren(Neu Laden)");
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
 


"@test"["04_Commit"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "22.Click <i>": function() {
        act.click('[data-qa="datamodel-extra-button"] .fa-cog');
    },"1.Take a screenshot": function() {act.screenshot();},
    '23.Click span "Änderungen..."': function() {
        act.click('[title="datamodel.button.commit"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "Übernehmen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Übernehmen)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '25.Click span "Neu Laden"': function() {
        act.click(":containsExcludeChildren(Neu Laden)");
    }
}; 