"@fixture 01_Base Config";
"@page http://10.122.4.25/?login=root&password=admin";

"@test"["02_Allgemein"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click div": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },
    '4.Click span "Allgemein"': function() {
        act.click('[data-qa="base-config-manager-general-tab-button"] .cui-button-center');
    },
    "5.Type in input": function() {
        act.type('[data-qa="base-config-manager-value-multiinput"] [cui-data-field-name="de-DE"] input', "TestCafe");
    },
    "6.Api Calls": function() {
        act.click('[data-qa="base-config-manager-enabled-select"] .cui-button-visual');
    },
    
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='base-config-manager-save-button'] .cui-button-center");
    }
};




