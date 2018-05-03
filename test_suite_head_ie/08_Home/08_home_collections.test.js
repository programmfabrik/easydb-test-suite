"@fixture 08_Home_Collections";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["01_Simple_Make_Collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "Meine Mappen"': function() {
        act.rclick(":containsExcludeChildren(Meine Mappen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Neue Mappe..."': function() {
        act.click('[title="tool.collection.new_child"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Type in input": function() {
        act.type('[cui-data-field-name="de-DE"] input', "map1");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Rclick div "map1"': function() {
        act.rclick(":containsExcludeChildren(map1)");
    }
};

"@test"["02_Rename_Collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "map1"': function() {
        act.rclick(":containsExcludeChildren(map1)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Umbenennen"': function() {
        act.click('[title="tool.collection.rename"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type('[cui-data-field-name="de-DE"] input', "2");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Rclick div "map12"': function() {
        act.rclick(":containsExcludeChildren(map12)");
    }
};




"@test"["03_Collection_Einstellungen"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "map1"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(map12)").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Einstellungen..."': function() {
        act.click('[title="tool.collection.settings"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in text area "Beschreibung"': function() {
        act.type('[cui-data-field-name="description"] [cui-data-field-name="de-DE"] textarea', "map1 description");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Hochladen"': function() {
        act.click('[tab="create_objects"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click label "Hochladen in diese..."': function() {
        act.click(":containsExcludeChildren(Hochladen in diese Mappe aktivieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click div "Meine Mappen"': function() {
        act.click(":containsExcludeChildren(Meine Mappen)");
    }
};

"@test"["03_Delete_Collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "map12"': function() {
        act.rclick(":containsExcludeChildren(map12)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Entfernen..."': function() {
        act.click('[title="tool.collection.delete"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Löschen"': function() {
        act.click(":containsExcludeChildren(Löschen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click div "Meine Mappen"': function() {
        act.click(":containsExcludeChildren(Meine Mappen)");
    }
};
