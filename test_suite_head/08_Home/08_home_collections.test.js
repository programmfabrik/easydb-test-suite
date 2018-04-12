"@fixture 08_Home_Collections";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["01_Simple_Make_Collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "Meine Mappen"': function() {
        act.rclick(":containsExcludeChildren(Meine Mappen)");
    },
    '3.Click span "Neue Mappe..."': function() {
        act.click('[title="tool.collection.new_child"] .cui-button-center');
    },
    "4.Type in input": function() {
        act.type('[cui-data-field-name="de-DE"] input', "map1");
    },
    '5.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    },
    '6.Rclick div "map1"': function() {
        act.rclick(":containsExcludeChildren(map1)");
    }
};

"@test"["02_Rename_Collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "map1"': function() {
        act.rclick(":containsExcludeChildren(map1)");
    },
    '4.Click span "Umbenennen"': function() {
        act.click('[title="tool.collection.rename"] .cui-button-center');
    },
    "5.Type in input": function() {
        act.type('[cui-data-field-name="de-DE"] input', "2");
    },
    '6.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    },
    '7.Rclick div "map12"': function() {
        act.rclick(":containsExcludeChildren(map12)");
    }
};




"@test"["03_Collection_Einstellungen"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "map1"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(map12)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Einstellungen..."': function() {
        act.click('[title="tool.collection.settings"] .cui-button-center');
    },
    '4.Type in text area "Beschreibung"': function() {
        act.type('[cui-data-field-name="description"] [cui-data-field-name="de-DE"] textarea', "map1 description");
    },
    '5.Click span "Hochladen"': function() {
        act.click('[tab="create_objects"] .cui-button-center');
    },
    '6.Click label "Hochladen in diese..."': function() {
        act.click(":containsExcludeChildren(Hochladen in diese Mappe aktivieren)");
    },
    '7.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(1);
        };
        act.click(actionTarget);
    },
    '8.Click span "Ok"': function() {
        act.click("#button-text-4234");
    },
    '9.Click div "Meine Mappen"': function() {
        act.click(":containsExcludeChildren(Meine Mappen)");
    }
};

"@test"["03_Delete_Collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "map12"': function() {
        act.rclick(":containsExcludeChildren(map12)");
    },
    '3.Click span "Entfernen..."': function() {
        act.click('[title="tool.collection.delete"] .cui-button-center');
    },
    '4.Click span "Löschen"': function() {
        act.click(":containsExcludeChildren(Löschen)");
    },
    '5.Click div "Meine Mappen"': function() {
        act.click(":containsExcludeChildren(Meine Mappen)");
    }
};
