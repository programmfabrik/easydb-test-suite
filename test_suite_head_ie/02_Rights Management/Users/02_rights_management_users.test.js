"@fixture 02_Rights_Managements_Users";
"@page http://10.122.4.25/usermanager/?login=root&password=admin";


"@test"["01_New_User_Basic"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[data-qa="system-list-manager-plus-button"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Type in input "Anzeigename"': function() {
        act.type('[cui-data-field-name="displayname"] input', "stcafe");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Speichern"': function() {
        act.click('[data-qa="system-list-manager-item-save-button"] .cui-button-center');
    }
};

"@test"["02_New_User_Pro"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[data-qa="system-list-manager-plus-button"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Type in input "Anzeigename"': function() {
        act.type('[cui-data-field-name="displayname"] input', "testcafepro");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Adresse"': function() {
        act.click('[data-qa="admin-user-address-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Straße"': function() {
        act.type('[cui-data-field-name="street"] input', "testcafe");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "E-Mails"': function() {
        act.click('[data-qa="admin-user-management-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Passwortverwaltung"': function() {
        act.click('[data-qa="admin-user-password-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Gruppen"': function() {
        act.click('[data-qa="system-list-manager-item-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Admin Gruppe (DE)"': function() {
        act.click(":containsExcludeChildren(Admin Gruppe DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Basic User Gruppe..."': function() {
        act.click(":containsExcludeChildren(Basic User Gruppe DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Rightsmanagement..."': function() {
        act.click(":containsExcludeChildren(Rightsmanagement Gruppe DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Dblclick span "Systemrechte"': function() {
        act.dblclick('[data-qa="admin-user-system-acl-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Root-Recht..."': function() {
        act.click(":containsExcludeChildren(RootRecht beinhaltet alle nachfolgenden Rechte und gibt dem Benutzer Vollzugriff auf das System)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Berechtigungen"': function() {
        act.click('[data-qa="admin-user-acl-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "14.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click input": function() {
        act.click('[data-qa="admin-user-acl-tab"] [col="1"] input');
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click div "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Berechtigungen..."': function() {
        act.click(":containsExcludeChildren(Berechtigungen anpassen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Benutzer ansehen"': function() {
        act.click(":containsExcludeChildren(Benutzer ansehen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Übernehmen)");
    },"1.Take a screenshot": function() {act.screenshot();},
     '6.Click span "Speichern"': function() {
        act.click('[data-qa="system-list-manager-item-save-button"] .cui-button-center');
    }
};

