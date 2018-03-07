"@fixture 01_Base Config";
"@page http://10.122.4.25/?login=root&password=admin";


"@test"["03_Hochladen"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },
    '5.Click input "Limit (bytes)"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-value-number-input']").find(" > input:nth(0)");
        };
        act.click(actionTarget);
    },
    '6.Type in input "Limit (bytes)"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-value-number-input']").find(" > input:nth(0)");
        };
        act.type(actionTarget, "50000");
    },
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='base-config-manager-save-button'] .cui-button-center");
    }
};