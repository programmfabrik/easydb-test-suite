"@fixture 03_Test Workflows";
"@page http://10.122.4.25/tagmanager/?login=root&password=admin";

"@test"["01_Test Upload Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click plus": function() {
        act.click('[data-qa="root-menu-app-top-menu-new_objects"] .cui-button-left');
    },
    '3.Click span "Dateien"': function() {
        act.click('[for="cui-file-upload-button"] .cui-button-center');
    },
    '4.Upload "24_03_2015_BMW_R80_caferacer_IWC_motorcycles_05.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/24_03_2015_BMW_R80_caferacer_IWC_motorcycles_05.jpg");
    },
    
    '7.Click span "Weiter"': function() {
        act.click('[data-qa="editor-modal-new-next-button"] .cui-button-center');
    },
    "8.Type in input": function() {
        act.type("[data-qa='text-column-editor-template-einzeiligertext'] input", "workflow test");
    },
    "9.Click div": function() {
        var actionTarget = function() {
            return $('[title="tags.field.button.open_popover"] .cui-button-center');
        };
        act.click(actionTarget);
    },
    '6.Click span "Erstversion"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Erstversion)").eq(2);
        };
        act.click(actionTarget);
    },
    '10.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    },
    '10.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    },
    '11.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};

"@test"["02_Test Delete Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click recherche": function() {
        act.click('[data-qa="root-menu-app-top-menu-main"] .cui-button-left');
    },
    "3.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },
    '4.Click span "Datensatz löschen..."': function() {
        act.click('[title="tool.object.delete_objects_from_server"] .cui-button-center');
    },
    '5.Click span "Löschen"': function() {
        act.click(":containsExcludeChildren(Löschen)");
    },
    '6.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};

