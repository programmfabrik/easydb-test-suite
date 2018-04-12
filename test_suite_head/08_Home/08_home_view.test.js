"@fixture 08_Home_View";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["01_View_All"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <svg>": function() {
        act.click('[ez5-loca-key="main.search.view.result-text"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <svg>": function() {
        act.click('[ez5-loca-key="main.search.view.result-standard"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <svg>": function() {
        act.click('[ez5-loca-key="main.search.view.result-table"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-angle-down").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Mittel"': function() {
        act.click(":containsExcludeChildren(Mittel)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Groß"': function() {
        act.click(":containsExcludeChildren(Groß)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Klein"': function() {
        act.click(":containsExcludeChildren(Klein)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Nicht anzeigen"': function() {
        act.click(":containsExcludeChildren(Nicht anzeigen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Standard"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Standard)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Tags"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tags)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Hierarchisch..."': function() {
        act.click(":containsExcludeChildren(Hierarchisch anzeigen)");
    }
};

"@test"["02_View_Hierarchisch_Test"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    
};