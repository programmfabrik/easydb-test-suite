"@fixture 11_Special_Features_01_Schlagworter_Setup";
"@page http://10.122.4.25/search?login=root&password=admin";


"@test"["01_Schlagworter_Objekt"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click menu": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Datenmodell"': function() {
        act.click('[data-qa="root-menu-app-admin-menu-datamodel_masks"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[data-qa="datamodel-list-plus-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Neuer Objekttyp"': function() {
        act.click('[data-qa="datamodel-create-new-objecttype-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Type in input "Name"': function() {
        act.type('[data-qa="admin-datamodel-form-name-input"] input', "testcafe_schlagworter");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Type in input "Bezeichnung"': function() {
        act.type('[data-qa="admin-datamodel-form-display-name-input"] [cui-data-field-name="de-DE"] input', "TestCafe Schlagworter ");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Type in input": function() {
        act.type('[data-qa="admin-datamodel-form-display-name-input"] [cui-data-field-name="en-US"] input', "TestCafe Schlagworter");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Felder"': function() {
        act.click('[data-qa="datamodel-listview-objecttype-datamodel-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click +": function() {
        act.click('[data-qa="datamodel-fields-plus-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Click feld": function() {
        act.click('[data-qa="admin-datamodel-new-field-top"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Type in input": function() {
        act.type('[row="1"] [col="1"] input', "name");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Einzeiliger Text"': function() {
        act.click('[row="1"] [col="3"] span');
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Mehrzeiliger Text"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Mehrzeiliger Text)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Speichern"': function() {
        act.click('[data-qa="datamodel-listview-save-button"] .cui-button-center');
    }
};

"@test"["02_Dateien_Objekt_Mit_Schlagwort"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click menu": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Datenmodell"': function() {
        act.click('[data-qa="root-menu-app-admin-menu-datamodel_masks"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[data-qa="datamodel-list-plus-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Neuer Objekttyp"': function() {
        act.click('[data-qa="datamodel-create-new-objecttype-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Type in input "Name"': function() {
        act.type('[data-qa="admin-datamodel-form-name-input"] input', "daten_mit_schlagwort");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Type in input "Bezeichnung"': function() {
        act.type('[data-qa="admin-datamodel-form-display-name-input"] [cui-data-field-name="de-DE"] input', "Dateien mit schlagwort");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Type in input": function() {
        act.type('[data-qa="admin-datamodel-form-display-name-input"] [cui-data-field-name="en-US"] input', "Dateien mit schlagwort");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Recherche"': function() {
        act.click('[data-qa="admin-datamodel-form-frontend-options-search-checkbox"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Felder"': function() {
        act.click('[data-qa="datamodel-listview-objecttype-datamodel-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click +": function() {
        act.click('[data-qa="datamodel-fields-plus-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Click feld": function() {
        act.click('[data-qa="admin-datamodel-new-field-top"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Type in input": function() {
        act.type('[row="1"] [col="1"] input', "beschreibung");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click +": function() {
        act.click('[data-qa="datamodel-fields-plus-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Click feld": function() {
        act.click('[data-qa="admin-datamodel-new-field-top"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Type in input": function() {
        act.type('[row="2"] [col="1"] input', "dateien");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Einzeiliger Text"': function() {
        act.click('[row="2"] [col="3"] span');
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Mehrzeiliger Text"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Datei)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click +": function() {
        act.click('[data-qa="datamodel-fields-plus-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Click feld": function() {
        act.click('[data-qa="admin-datamodel-new-field-top"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Type in input": function() {
        act.type('[row="3"] [col="1"] input', "schlagwort");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Einzeiliger Text"': function() {
        act.click('[row="3"] [col="3"] span');
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Mehrzeiliger Text"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(TestCafe Schlagworter)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Speichern"': function() {
        act.click('[data-qa="datamodel-listview-save-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
};

"@test"["03_Datenmodell_Speichern"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click menu": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Datenmodell"': function() {
        act.click('[data-qa="root-menu-app-admin-menu-datamodel_masks"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-button-left .fa-cog");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Änderungen..."': function() {
        var actionTarget = function() {
            return $('.cui-button-center span').filter(function(index, span) { return span.textContent === "Änderungen aktivieren"; })[0];
        };
        act.click(actionTarget);
    }
};

"@test"["04_Schlagworter_Search_in_Finder"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click menu": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Objekttyp"': function() {
        act.click('[data-qa="root-menu-app-admin-menu-objecttype"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "TestCafe..."': function() {
        act.click(":containsExcludeChildren(TestCafe Schlagworter)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in text area "Beschreibung"': function() {
        act.type('[cui-data-field-name="description"] [cui-data-field-name="de-DE"] textarea', "SIF");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Speichern"': function() {
        act.click('[data-qa="system-list-manager-item-save-button"] .cui-button-center');
    }
};