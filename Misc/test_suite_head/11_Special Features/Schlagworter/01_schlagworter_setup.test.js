"@fixture 01_Schlagworter Setup";
"@page http://10.122.4.25/search?login=root&password=admin";


"@test"["01_Schlagworter Objekt"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click menu": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .cui-button-left');
    },
    '3.Click span "Datenmodell"': function() {
        act.click('[data-qa="root-menu-app-admin-menu-datamodel_masks"] .cui-button-center');
    },
    "4.Click <i>": function() {
        act.click('[data-qa="datamodel-list-plus-button"] .cui-button-left');
    },
    '5.Click span "Neuer Objekttyp"': function() {
        act.click('[data-qa="datamodel-create-new-objecttype-button"] .cui-button-center');
    },
    '6.Type in input "Name"': function() {
        act.type('[data-qa="admin-datamodel-form-name-input"] input', "testcafe_schlagworter");
    },
    '7.Type in input "Bezeichnung"': function() {
        act.type('[data-qa="admin-datamodel-form-display-name-input"] [cui-data-field-name="de-DE"] input', "TestCafe Schlagworter ");
    },
    "8.Type in input": function() {
        act.type('[data-qa="admin-datamodel-form-display-name-input"] [cui-data-field-name="en-US"] input', "TestCafe Schlagworter");
    },
    '9.Click span "Felder"': function() {
        act.click('[data-qa="datamodel-listview-objecttype-datamodel-tab-button"] .cui-button-center');
    },
    "10.Click +": function() {
        act.click('[data-qa="datamodel-fields-plus-button"] .cui-button-left');
    },
    "11.Click feld": function() {
        act.click('[data-qa="admin-datamodel-new-field-top"] .cui-button-center');
    },
    "12.Type in input": function() {
        act.type('[row="1"] [col="1"] input', "name");
    },
    '13.Click span "Einzeiliger Text"': function() {
        act.click('[row="1"] [col="3"] span');
    },
    '14.Click span "Mehrzeiliger Text"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Mehrzeiliger Text)").eq(0);
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    '16.Click span "Speichern"': function() {
        act.click('[data-qa="datamodel-listview-save-button"] .cui-button-center');
    }
};

"@test"["02_Dateien Objekt Mit Schlagwort"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click menu": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .cui-button-left');
    },
    '3.Click span "Datenmodell"': function() {
        act.click('[data-qa="root-menu-app-admin-menu-datamodel_masks"] .cui-button-center');
    },
    "4.Click <i>": function() {
        act.click('[data-qa="datamodel-list-plus-button"] .cui-button-left');
    },
    '5.Click span "Neuer Objekttyp"': function() {
        act.click('[data-qa="datamodel-create-new-objecttype-button"] .cui-button-center');
    },
    '6.Type in input "Name"': function() {
        act.type('[data-qa="admin-datamodel-form-name-input"] input', "daten_mit_schlagwort");
    },
    '7.Type in input "Bezeichnung"': function() {
        act.type('[data-qa="admin-datamodel-form-display-name-input"] [cui-data-field-name="de-DE"] input', "Dateien mit schlagwort");
    },
    "8.Type in input": function() {
        act.type('[data-qa="admin-datamodel-form-display-name-input"] [cui-data-field-name="en-US"] input', "Dateien mit schlagwort");
    },
    '11.Click span "Recherche"': function() {
        act.click('[data-qa="admin-datamodel-form-frontend-options-search-checkbox"] .cui-button-center');
    },
    '9.Click span "Felder"': function() {
        act.click('[data-qa="datamodel-listview-objecttype-datamodel-tab-button"] .cui-button-center');
    },
    "10.Click +": function() {
        act.click('[data-qa="datamodel-fields-plus-button"] .cui-button-left');
    },
    "11.Click feld": function() {
        act.click('[data-qa="admin-datamodel-new-field-top"] .cui-button-center');
    },
    "12.Type in input": function() {
        act.type('[row="1"] [col="1"] input', "beschreibung");
    },
    "10.Click +": function() {
        act.click('[data-qa="datamodel-fields-plus-button"] .cui-button-left');
    },
    "11.Click feld": function() {
        act.click('[data-qa="admin-datamodel-new-field-top"] .cui-button-center');
    },
    "12.Type in input": function() {
        act.type('[row="2"] [col="1"] input', "dateien");
    },
    '13.Click span "Einzeiliger Text"': function() {
        act.click('[row="2"] [col="3"] span');
    },
    '14.Click span "Mehrzeiliger Text"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Datei)").eq(1);
        };
        act.click(actionTarget);
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "10.Click +": function() {
        act.click('[data-qa="datamodel-fields-plus-button"] .cui-button-left');
    },
    "11.Click feld": function() {
        act.click('[data-qa="admin-datamodel-new-field-top"] .cui-button-center');
    },
    "12.Type in input": function() {
        act.type('[row="3"] [col="1"] input', "schlagwort");
    },
    '13.Click span "Einzeiliger Text"': function() {
        act.click('[row="3"] [col="3"] span');
    },
    '14.Click span "Mehrzeiliger Text"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(TestCafe Schlagworter)").eq(1);
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    '16.Click span "Speichern"': function() {
        act.click('[data-qa="datamodel-listview-save-button"] .cui-button-center');
    },
};

"@test"["03_Datenmodell speichern"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },
    "2.Click menu": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .cui-button-left');
    },
    '3.Click span "Datenmodell"': function() {
        act.click('[data-qa="root-menu-app-admin-menu-datamodel_masks"] .cui-button-center');
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-button-left .fa-cog");
        };
        act.click(actionTarget);
    },
    '3.Click span "Änderungen..."': function() {
        var actionTarget = function() {
            return $('.cui-button-center span').filter(function(index, span) { return span.textContent === "Änderungen aktivieren"; })[0];
        };
        act.click(actionTarget);
    }
};

"@test"["04_Schlagworter Search in finder"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },
    "2.Click menu": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .cui-button-left');
    },
    '3.Click span "Objekttyp"': function() {
        act.click('[data-qa="root-menu-app-admin-menu-objecttype"] .cui-button-center');
    },
    '3.Click span "TestCafe..."': function() {
        act.click(":containsExcludeChildren(TestCafe Schlagworter)");
    },
    '4.Type in text area "Beschreibung"': function() {
        act.type('[cui-data-field-name="description"] [cui-data-field-name="de-DE"] textarea', "SIF");
    },
    '5.Click span "Speichern"': function() {
        act.click('[data-qa="system-list-manager-item-save-button"] .cui-button-center');
    }
};