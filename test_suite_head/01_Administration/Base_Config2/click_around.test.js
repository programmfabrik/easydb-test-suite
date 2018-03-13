"@fixture 01_Base Config (3)";
"@page http://10.122.4.25/?login=root&password=admin";


"@test"["01_Click Around"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },
    "1.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },
    '2.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },
    '3.Click span "Allgemein"': function() {
        act.click('[data-qa="base-config-manager-general-tab-button"] .cui-button-center');
    },
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },
    '5.Click span "Anmelden"': function() {
        act.click('[data-qa="base-config-manager-login-tab-button"] .cui-button-center');
    },
    '6.Click span "Design"': function() {
        act.click('[data-qa="base-config-manager-css-tab-button"] .cui-button-center');
    },
    '7.Click span "Export und OAI/PMH"': function() {
        act.click('[data-qa="base-config-manager-export-tab-button"] .cui-button-center');
    },
    '8.Click span "Cloud-Dienstleister"': function() {
        act.click('[data-qa="base-config-manager-cloud_services-tab-button"] .cui-button-center');
    },
    '9.Click span "CMS"': function() {
        act.click('[data-qa="base-config-manager-cms-tab-button"] .cui-button-center');
    },
    '10.Click span "Server-Config"': function() {
        act.click('[data-qa="base-config-manager-server-config-tab-button"] .cui-button-center');
    }
};