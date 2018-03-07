"@fixture 04_Editor";
"@page http://10.122.4.25/?login=root&password=admin";

"@test"["Last Edited"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.dblclick(actionTarget);
    },
    '3.Dblclick span "Datensatz wurde..."': function() {
        act.dblclick(":containsExcludeChildren(Datensatz wurde zuletzt am)");
    }
};

"@test"["01_Save Vorlage"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        act.click('[title="root.menu.top.menu.new_objects"] .cui-button-left');
    },
    '3.Click span "Weiter"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Weiter)").eq(0);
        };
        act.click(actionTarget);
    },
    "4.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "vorlage1");
    },
    '5.Click span "Keine Dateien zum..."': function() {
        act.click(":containsExcludeChildren(Keine Dateien zum Anzeigen)");
    },
    "6.Click tack": function() {
        act.click('[data-qa="toolbox-tool-editor-template-menu-button"] .cui-button-left');
    },
    '7.Click span "Als Vorlage..."': function() {
        act.click(":containsExcludeChildren(Als Vorlage speichern)");
    },
    "8.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-input.cui-data-field.cui-data-field-input.cui-has-focus.cui-input-has-user-input").find(" > input:nth(0)");
        };
        act.type(actionTarget, "vorlage1");
    },
    '9.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(1);
        };
        act.click(actionTarget);
    }
};

