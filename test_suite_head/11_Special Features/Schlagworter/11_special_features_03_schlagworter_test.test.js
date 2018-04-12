"@fixture 11_Special_Features_03_Schlagworter_Test";
"@page http://10.122.4.25/search?login=root&password=admin";

"@test"["01_Select_Cafe_Schlagwort_and_First_Asset"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click div "TestCafe..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(TestCafe Schlagworter)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Wait 3000 milliseconds": function() {
        act.wait(3e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click div "cafe"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(cafe)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Anzeigen..."': function() {
        act.click(":containsExcludeChildren(Anzeigen Detailansicht)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Dblclick span "daten_mit_schlagwor..."': function() {
        act.dblclick(":containsExcludeChildren(datenmitschlagwortallfields)");
    }
};

"@test"["02_Schalgwort_Expert_Search"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[data-qa="search-expert-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Alle Objekttypen"': function() {
        act.click('[data-qa="search-expert-options-objecttype-select"] .cui-button-center')
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien mit..."': function() {
        act.click('[data-qa="search-expert-options-daten_mit_schlagwort-objecttype-select-option"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Type in input": function() {
        act.type('[ez5-field-name="daten_mit_schlagwort.schlagwort"] input', "cafe");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Press key ENTER": function() {
        act.press("enter");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Press key ENTER": function() {
        act.press("enter");
    },"1.Take a screenshot": function() {act.screenshot();},
    
    '5.Click span "In die Suche..."': function() {
        act.dblclick('[data-qa="search-expert-options-apply-button"] span');
    },"1.Take a screenshot": function() {act.screenshot();},
    '55.Click span "Search"': function() {
        act.dblclick('[ez5-loca-key="search.button.search"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Anzeigen..."': function() {
        act.click(":containsExcludeChildren(Anzeigen Detailansicht)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Dblclick span "daten_mit_schlagwor..."': function() {
        act.dblclick(":containsExcludeChildren(datenmitschlagwortallfields)");
    }
};

