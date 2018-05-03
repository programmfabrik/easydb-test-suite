"@fixture 01_Administration_Metadaten_Mapping";
"@page http://10.122.4.25/metadata/?login=root&password=admin";


"@test"["01_Import_Meta"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[data-qa="metadata-plus-button"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "IMPORT"': function() {
        act.click('[data-qa="metadata-profile-import.yml-item"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Name"': function() {
        act.type('[data-qa="metadata-profile-mapping-general-name-input"] [cui-data-field-name="de-DE"] input', "import_meta");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Beschreibung"': function() {
        act.click('[tab="beschreibung"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Alle Felder (DE)"': function() {
        act.click(":containsExcludeChildren(Alle Felder DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Drag span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Einzeiliger Text DE)").eq(0);
        };
        act.drag(actionTarget, 263, -80, {
            offsetX: 33,
            offsetY: 14
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Dateien (DE)"': function() {
        act.click(":containsExcludeChildren(Dateien DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Drag span "Beschreibung (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Beschreibung DE)").eq(0);
        };
        act.drag(actionTarget, 257, -76, {
            offsetX: 26,
            offsetY: 14
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Rechte"': function() {
        act.click('[tab="rights"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    
    '12.Click span "GPS"': function() {
        act.click('[tab="gps"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Dateieigenschaften"': function() {
        act.click('[tab="fileproperties"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Speichern"': function() {
        act.click('[data-qa="metadata-profile-mapping-save-button"] .cui-button-center');
    }
};

"@test"["02_Export_Meta"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    
    "2.Click div": function() {
        act.click('[data-qa="metadata-plus-button"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "EXPORT"': function() {
        act.click('[data-qa="metadata-profile-export.yml-item"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Name"': function() {
        act.type('[data-qa="metadata-profile-mapping-general-name-input"] [cui-data-field-name="de-DE"] input', "export_meta");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Beschreibung"': function() {
        act.click('[tab="beschreibung"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Drag span "Kurzinfo"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Kurzinfo)").eq(0);
        };
        act.drag(actionTarget, 296, 89, {
            offsetX: 26,
            offsetY: 12
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Drag span "Objekttyp"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Objekttyp)").eq(0);
        };
        act.drag(actionTarget, 272, 113, {
            offsetX: 24,
            offsetY: 12
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Drag span "System-ID"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(SystemID)").eq(0);
        };
        act.drag(actionTarget, 289, 111, {
            offsetX: 32,
            offsetY: 14
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Drag span "Globale-System-ID"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(GlobaleSystemID)").eq(0);
        };
        act.drag(actionTarget, 294, 128, {
            offsetX: 35,
            offsetY: 13
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Drag span "Änderungshistorie"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Änderungshistorie)").eq(0);
        };
        act.drag(actionTarget, 269, 336, {
            offsetX: 36,
            offsetY: 13
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Drag span "Owner"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Owner)").eq(0);
        };
        act.drag(actionTarget, 266, 322, {
            offsetX: 18,
            offsetY: 11
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Drag span "Tags"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tags)").eq(0);
        };
        act.drag(actionTarget, 297, 351, {
            offsetX: 11,
            offsetY: 9
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Rechte"': function() {
        act.click('[tab="rights"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "GPS"': function() {
        act.click('[tab="gps"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Speichern"': function() {
        act.click('[data-qa="metadata-profile-mapping-save-button"] .cui-button-center');
    }
    
};

