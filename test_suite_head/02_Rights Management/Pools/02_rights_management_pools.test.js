"@fixture 02_Rights_Management_Pools";
"@page http://10.122.4.25/poolmanager/?login=root&password=admin";





"@test"["01_Basic_Pool"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Alle Pools"': function() {
        act.click(":containsExcludeChildren(Alle Pools)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > i:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Neu in "Alle Pools""': function() {
        act.click(":containsExcludeChildren(Neu in Alle Pools)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Type in input "Name"': function() {
        act.type('[cui-data-field-name="name"] [cui-data-field-name="de-DE"] input', "Basic Pool (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Type in input "Name"': function() {
        act.type('[cui-data-field-name="name"] [cui-data-field-name="en-US"] input', "Basic Pool (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Type in input "Name"': function() {
        act.type('[cui-data-field-name="name"] [cui-data-field-name="es-ES"] input', "Basic Pool (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Type in input "Name"': function() {
        act.type('[cui-data-field-name="name"] [cui-data-field-name="it-IT"] input', "Basic Pool (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Type in input "Ansprechpartnet"': function() {
        act.type('.ez5-query-element-input-search input', "Root");
    },"1.Take a screenshot": function() {act.screenshot();},
     "5.Press key ENTER": function() {
        act.press("enter");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Kein Profil"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Kein Profil)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Vom Objekttyp"': function() {
        act.click(":containsExcludeChildren(Vom Objekttyp)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Kein Profil"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Kein Profil)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Vom Objekttyp"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Vom Objekttyp)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '20.Click span "Kein Profil"': function() {
        act.click(":containsExcludeChildren(Kein Profil)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '21.Click span "Vom Objekttyp"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Vom Objekttyp)").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Wasserzeichen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Wasserzeichen)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '23.Click span "Masken"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Masken)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "Tags"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tags)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '25.Click span "Workflows"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Workflows)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '26.Click span "Berechtigungen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Berechtigungen)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '27.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $('[data-qa="system-list-manager-item-save-button"] .cui-button-center');
        };
        act.click(actionTarget);
    }
};

