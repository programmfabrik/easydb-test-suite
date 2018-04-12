"@fixture 01_Administration_Events";
"@page http://10.122.4.25/eventmanager/?login=root&password=admin";

"@test"["01_Click_Everything"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "ID"': function() {
        act.click(":containsExcludeChildren(ID)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Zeitpunkt"': function() {
        act.click(":containsExcludeChildren(Zeitpunkt)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Benutzer"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Benutzer)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Typ"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Typ)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Herunterladen als..."': function() {
        act.click(":containsExcludeChildren(Herunterladen als CSV)");
    }
};


"@test"["02_Choose_Event_Type"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "- Auswahl -"': function() {
        act.click(":containsExcludeChildren(Auswahl)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "API-Call"': function() {
        act.click(":containsExcludeChildren(APICall)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Aktualisieren"': function() {
        act.click(":containsExcludeChildren(Aktualisieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "- Auswahl -"': function() {
        act.click(":containsExcludeChildren(Auswahl)");
    }
};





"@test"["03_Search_Event_ID"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Type in input "ID"': function() {
        act.type('[cui-data-field-name="id"] input', "200");
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Aktualisieren"': function() {
        act.click(":containsExcludeChildren(Aktualisieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "200"': function() {
        act.click(":containsExcludeChildren(200)");
    }
};

"@test"["04_Delete_Single_Event"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-tree-node-content").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        act.click('[ez5-loca-key="system.list.manager.button.minus"] .fa-minus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Aktualisieren"': function() {
        act.click(":containsExcludeChildren(Aktualisieren)");
    }
};

"@test"["05_Delete_All_Events"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-tree-node-content").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Ereignisse löschen"': function() {
        act.click(":containsExcludeChildren(Ereignisse löschen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Dblclick span "Aktualisieren"': function() {
        act.dblclick(":containsExcludeChildren(Aktualisieren)");
    }
};

