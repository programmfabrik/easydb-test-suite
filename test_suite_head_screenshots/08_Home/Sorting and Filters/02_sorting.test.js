"@fixture 02_Sorting";
"@page http://10.122.4.25/search/?login=root&password=admin";



"@test"["Objekttyp"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Sortierung: Kurzinfo"': function() {
        act.click(":containsExcludeChildren(Sortierung)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    }
};



"@test"["AnderungsHistorie"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Sortierung:..."': function() {
        act.click(":containsExcludeChildren(Sortierung)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(5);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Aufsteigend"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Aufsteigend)").eq(3);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Absteigend"': function() {
        act.click(":containsExcludeChildren(Absteigend)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    }
};

"@test"["Two Sortings"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Sortierung:..."': function() {
        act.click(":containsExcludeChildren(Sortierung)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    }
};


"@test"["Sort Specific (Critical Test)"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};