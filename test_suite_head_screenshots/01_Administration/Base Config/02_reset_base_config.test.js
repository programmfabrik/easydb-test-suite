"@fixture 02_Reset Base Config";
"@page http://10.122.4.25/?login=root&password=admin";

"@test"["Remove Upload Limit"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click input "Limit (bytes)"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-value-number-input']").find(" > input:nth(0)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='base-config-manager-save-button'] .cui-button-center");
    }
};



"@test"["Allow all types"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(3);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(4);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(5);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(6);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
    	var actionTarget = function() {
            return $("[data-qa='base-config-manager-save-button'] .cui-button-center");
        };
        act.click(actionTarget);
    }
};