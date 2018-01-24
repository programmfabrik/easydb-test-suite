"@fixture 08_Pools NEW";
"@page http://5.peter.pf-berlin.de/poolmanager/?login=root&password=admin";





"@test"["Basic Pool"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Alle Pools"': function() {
        act.click(":containsExcludeChildren(Alle Pools)");
    },
    "3.Click <i>": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > i:nth(0)");
    },
    '4.Click span "Neu in "Alle Pools""': function() {
        act.click(":containsExcludeChildren(Neu in Alle Pools)");
    },
    '5.Type in input "Name"': function() {
        act.type('[cui-data-field-name="name"] [cui-data-field-name="de-DE"] input', "Basic Pool (DE)");
    },
    '6.Type in input "Name"': function() {
        act.type('[cui-data-field-name="name"] [cui-data-field-name="en-US"] input', "Basic Pool (DE)");
    },
    '7.Type in input "Name"': function() {
        act.type('[cui-data-field-name="name"] [cui-data-field-name="es-ES"] input', "Basic Pool (DE)");
    },
    '8.Type in input "Name"': function() {
        act.type('[cui-data-field-name="name"] [cui-data-field-name="it-IT"] input', "Basic Pool (DE)");
    },
    '9.Type in input "Ansprechpartnet"': function() {
        act.type('.ez5-query-element-input-search input', "Root");
    },
     "5.Press key ENTER": function() {
        act.press("enter");
    },
    '3.Click span "Kein Profil"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Kein Profil)").eq(0);
        };
        act.click(actionTarget);
    },
    '17.Click span "Vom Objekttyp"': function() {
        act.click(":containsExcludeChildren(Vom Objekttyp)");
    },
    '18.Click span "Kein Profil"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Kein Profil)").eq(0);
        };
        act.click(actionTarget);
    },
    '19.Click span "Vom Objekttyp"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Vom Objekttyp)").eq(1);
        };
        act.click(actionTarget);
    },
    '20.Click span "Kein Profil"': function() {
        act.click(":containsExcludeChildren(Kein Profil)");
    },
    '21.Click span "Vom Objekttyp"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Vom Objekttyp)").eq(2);
        };
        act.click(actionTarget);
    },
    '22.Click span "Wasserzeichen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Wasserzeichen)").eq(0);
        };
        act.click(actionTarget);
    },
    '23.Click span "Masken"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Masken)").eq(0);
        };
        act.click(actionTarget);
    },
    '24.Click span "Tags"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tags)").eq(0);
        };
        act.click(actionTarget);
    },
    '25.Click span "Workflows"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Workflows)").eq(0);
        };
        act.click(actionTarget);
    },
    '26.Click span "Berechtigungen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Berechtigungen)").eq(0);
        };
        act.click(actionTarget);
    },
    '27.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};

