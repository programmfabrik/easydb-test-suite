"@fixture 03_Search for Schlagworter";
"@page http://5.peter.pf-berlin.de/search?login=root&password=admin";

"@test"["Select Cafe Schlagwort and first asset"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click div "TestCafe..."': function() {
        act.click(":containsExcludeChildren(TestCafe Schlagworter)");
    },
    "3.Wait 3000 milliseconds": function() {
        act.wait(3e3);
    },
    '4.Click div "cafe"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(cafe)").eq(0);
        };
        act.click(actionTarget);
    },
    "5.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },
    '6.Click span "Anzeigen..."': function() {
        act.click(":containsExcludeChildren(Anzeigen Detailansicht)");
    },
    '7.Dblclick span "daten_mit_schlagwor..."': function() {
        act.dblclick(":containsExcludeChildren(datenmitschlagwortallfields)");
    }
};

"@test"["Schalgwort expert search"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        act.click('[data-qa="search-expert-button"] .cui-button-left');
    },
    "3.Type in input": function() {
        act.type('[ez5-field-name="daten_mit_schlagwort.schlagwort"] input', "cafe");
    },
    '4.Click <em> "cafe"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(cafe)").eq(1);
        };
        act.click(actionTarget);
    },
    '5.Click span "In die Suche..."': function() {
        act.click('[data-qa="search-expert-options-apply-button"] span');
    },
    "6.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },
    '7.Click span "Anzeigen..."': function() {
        act.click(":containsExcludeChildren(Anzeigen Detailansicht)");
    },
    '8.Dblclick span "daten_mit_schlagwor..."': function() {
        act.dblclick(":containsExcludeChildren(datenmitschlagwortallfields)");
    }
};

