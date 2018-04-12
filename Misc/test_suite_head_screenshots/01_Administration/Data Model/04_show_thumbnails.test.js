"@fixture 04_Show thumbnails";
"@page http://10.122.4.25/datamodel/?login=root&password=admin";

"@test"["01_Viewable in Alle Felder"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[row="0"] .fa-caret-right');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "allefelder__all_fie..."': function() {
        act.click(":containsExcludeChildren(allefelderallfields)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Definition"': function() {
        act.click(":containsExcludeChildren(Definition)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click div": function() {
        act.click('[row="11"] [col="13"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Anzeigen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anzeigen)").eq(3);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    
};



"@test"["02_Viewable in Dateien"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click <i>": function() {
        act.click('[row="1"] .fa-caret-right');
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "dateien__all_fields"': function() {
        act.click(":containsExcludeChildren(dateienallfields)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Definition"': function() {
        act.click(":containsExcludeChildren(Definition)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click div": function() {
        act.click('.cui-list-view-grid-inner-bottom [row="3"] [col="13"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Anzeigen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anzeigen)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '21.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(1);
        };
        act.click(actionTarget);
    }
};


"@test"["03_Commit"] = {
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