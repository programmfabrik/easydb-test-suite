"@fixture 02_Add Images with Schlagworter";
"@page http://10.122.4.25/metadata?login=root&password=admin";

"@test"["01_Upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/AR_2209_BMW_RnineT_Scrambler-06.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click div": function() {
        var actionTarget = function() {
            return $('[data-qa="editor-modal-new-objecttype-select"] span');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Dateien mit..."': function() {
        act.click(":containsExcludeChildren(Dateien mit schlagwort)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-beschreibung"] input', "bmw cafe sunny day");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Type in input": function() {
        act.type('[ez5-field-name="daten_mit_schlagwort.schlagwort"] input', "cafe");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Editor öffnen"': function() {
        act.click('[title="search.mini.result.manager.new_object"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Speichern"': function() {
        act.click('[ez5-mask="testcafe_schlagworter__all_fields"] [data-qa="editor-save-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};





"@test"["02_Upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/58558ea34bcb3419b895fc933e0ece07.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click div": function() {
        var actionTarget = function() {
            return $('[data-qa="editor-modal-new-objecttype-select"] span');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Dateien mit..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien mit schlagwort)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-beschreibung"] input', "bmw front angle");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Type in input": function() {
        act.type('[ez5-field-name="daten_mit_schlagwort.schlagwort"] input', "cafe");
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click <em> "cafe"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(cafe)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

"@test"["03_Upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/p90135061-highres.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click div": function() {
        var actionTarget = function() {
            return $('[data-qa="editor-modal-new-objecttype-select"] span');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Dateien mit..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien mit schlagwort)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},  
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-beschreibung"] input', "bmw in an alley");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Type in input": function() {
        act.type('[ez5-field-name="daten_mit_schlagwort.schlagwort"] input', "cafe");
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click <em> "cafe"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(cafe)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

