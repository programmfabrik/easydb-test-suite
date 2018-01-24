"@fixture 02_Add Images with Schlagworter";
"@page http://5.peter.pf-berlin.de/search?login=root&password=admin";

"@test"["01_Upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/AR_2209_BMW_RnineT_Scrambler-06.jpg");
    },
    "4.Click div": function() {
        var actionTarget = function() {
            return $('[data-qa="editor-modal-new-objecttype-select"] span');
        };
        act.click(actionTarget);
    },
    '5.Click span "Dateien mit..."': function() {
        act.click(":containsExcludeChildren(Dateien mit schlagwort)");
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    "7.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-beschreibung"] input', "bmw cafe sunny day");
    },
    "8.Type in input": function() {
        act.type('[ez5-field-name="daten_mit_schlagwort.schlagwort"] input', "cafe");
    },
    '9.Click span ""cafe" neu anlegen."': function() {
        act.click(":containsExcludeChildren(cafe neu anlegen)");
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};





"@test"["02_Upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/58558ea34bcb3419b895fc933e0ece07.jpg");
    },
    "4.Click div": function() {
        var actionTarget = function() {
            return $('[data-qa="editor-modal-new-objecttype-select"] span');
        };
        act.click(actionTarget);
    },
    '5.Click span "Dateien mit..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien mit schlagwort)").eq(2);
        };
        act.click(actionTarget);
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    "7.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-beschreibung"] input', "bmw front angle");
    },
    "8.Type in input": function() {
        act.type('[ez5-field-name="daten_mit_schlagwort.schlagwort"] input', "cafe");
    },
    '10.Click <em> "cafe"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(cafe)").eq(1);
        };
        act.click(actionTarget);
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

"@test"["03_Upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/p90135061-highres.jpg");
    },
    "4.Click div": function() {
        var actionTarget = function() {
            return $('[data-qa="editor-modal-new-objecttype-select"] span');
        };
        act.click(actionTarget);
    },
    '5.Click span "Dateien mit..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien mit schlagwort)").eq(4);
        };
        act.click(actionTarget);
    },   
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    "7.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-beschreibung"] input', "bmw in an alley");
    },
    "8.Type in input": function() {
        act.type('[ez5-field-name="daten_mit_schlagwort.schlagwort"] input', "cafe");
    },
    '10.Click <em> "cafe"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(cafe)").eq(1);
        };
        act.click(actionTarget);
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

