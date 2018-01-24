"@fixture 03_Group Editor";
"@page http://5.peter.pf-berlin.de/?login=root&password=admin";

"@test"["03_01 upload multiple"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    '3.Click span "Dateien"': function() {
        act.click('.cui-file-upload-button  .cui-button-center');
    },
    '4.Upload "193@e84132d0-9173-444c-ab66-cbd7cce0baf4_1000764983_original.png", "200@e84132d0-9173-444c-ab66-cbd7cce0baf4_1000764990_original.png" files': function() {
        act.upload("#cui-file-upload-button", [ "./uploads/193@e84132d0-9173-444c-ab66-cbd7cce0baf4_1000764983_original.png", "./uploads/200@e84132d0-9173-444c-ab66-cbd7cce0baf4_1000764990_original.png" ]);
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    "6.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-template-einzeiligertext'] .cui-input", "Colours");
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};













"@test"["03_02 Group Editor"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.click(actionTarget, {
            ctrl: true
        });
    },
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(1);
        };
        act.click(actionTarget, {
            ctrl: true
        });
    },
    "4.click pencil": function() {
        act.click(".cui-button[data-qa='toolbox-tool-selection-bulk-edit-button'] .cui-button-left");
    },
    '5.Click span "2 Alle Felder..."': function() {
        act.click(":containsExcludeChildren(2 Alle Felder DE bearbeiten)");
    },
    '6.Click div "main.editor.template"': function() {
        act.click(".cui-label.cui-loca-label.ez5-result-object-no-asset-browser.cui-dom-element-has-tooltip-on-hover.cui-label-centered[title='main.editor.template']");
    },
    '7.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Einzeiliger Text DE)").eq(1);
        };
        act.click(actionTarget);
    },
    "8.Type in input": function() {
        act.type(".cui-input.cui-data-field.cui-data-field-input.cui-input-has-no-user-input[data-qa='text-column-editor-bulk-einzeiligertext']", "Two nice Colors");
    },
    '9.Click span "Einzeiliger Text..."': function() {
        act.click(":containsExcludeChildren(Einzeiliger Text mehrsprachig DE)");
    },
    '10.Click span "Suchen & Ersetzen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Suchen Ersetzen)").eq(1);
        };
        act.click(actionTarget);
    },
    "11.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-input.cui-data-field.cui-data-field-input.cui-input-has-no-user-input").find(" > input:nth(0)").eq(4);
        };
        act.type(actionTarget, "Colors");
    },
    '12.Click span "Ganze Worte"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ganze Worte)").eq(1);
        };
        act.click(actionTarget);
    },
    '13.Click span "Groß- und..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Groß und Kleinschreibung beachten)").eq(1);
        };
        act.click(actionTarget);
    },
    '14.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};