"@fixture Anonym";
"@page http://lmz-stuttgart.5.easydb.de/as";
"@auth lmz-stuttgart:7zhysgnZ";
"@test"["Anonym"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(7e3);
    },
    '2.Click span "Registrieren"': function() {
        act.click(":containsExcludeChildren(Registrieren)");
    },
    "3.Take a screenshot": function() {
        act.screenshot();
    },
    "4.Click use": function() {
        act.click("body > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > svg:nth(0) > use:nth(0)");
    },
    '5.Click span "Hilfe"': function() {
        act.click(":containsExcludeChildren(Hilfe)");
    },
    "6.Take a screenshot": function() {
        act.screenshot();
    },
    "7.Click use": function() {
        act.click("body > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > svg:nth(0) > use:nth(0)");
    },
    
    '24.Click span "Nur nach..."': function() {
        act.click(":containsExcludeChildren(nur nach Unterrichtsmodulen suchen)");
    },
    "25.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    '26.Click span "OER (Open..."': function() {
        act.click(":containsExcludeChildren(nach OER)");
    },
    '27.Click span "Nur empfohlene..."': function() {
        act.click(":containsExcludeChildren(Besonders empfohlene Medien)");
    },
    "28.Take a screenshot": function() {
        act.screenshot();
    },
    "29.Click <i>": function() {
        act.click('[cui-data-field-name="sort"] .fa-angle-down');
    },
    '30.Click span "Produktionsjahr"': function() {
        act.click(":containsExcludeChildren(Produktionsjahr)");
    },
    "31.Take a screenshot": function() {
        act.screenshot();
    },
    '32.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    '33.Click span "Nur nach..."': function() {
        act.click(":containsExcludeChildren(nur nach Unterrichtsmodulen suchen)");
    },
    "1.Wait 5000 milliseconds": function() {
        act.wait(3e3);
    },
    
    
    "38.Click <i>": function() {
        act.click('[cui-data-field-name="fach"] .fa-angle-down');
    },
    '39.Click span "Biologie"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Biologie)").eq(0);
        };
        act.click(actionTarget);
    },
    "40.Take a screenshot": function() {
        act.screenshot();
    },
    '41.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    '42.Click span "Grundschule"': function() {
        act.click(":containsExcludeChildren(Grundschule)");
    },
    "43.Take a screenshot": function() {
        act.screenshot();
    },
    '44.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    
    '48.Click span "nur Verleih-Medien"': function() {
        act.click(":containsExcludeChildren(nur VerleihMedien)");
    },
    "49.Take a screenshot": function() {
        act.screenshot();
    },
    '44.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    
    "60.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },
    '3.Type in span "Alkohol Am Steuer"': function() {
        var actionTarget = function() {
            return $(".cui-horizontal-layout-center.ez5-search-input-query").find(" > span:nth(0)");
        };
        act.type(actionTarget, "Alkohol Am Steuer");
    },
    "62.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "63.Click <i>": function() {
        act.click(".fa.fa-search");
    }
};