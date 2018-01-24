"@fixture View";
"@page http://5.peter.pf-berlin.de/search/?login=root&password=admin";

"@test"["View All"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <svg>": function() {
        act.click('[ez5-loca-key="main.search.view.result-text"] .cui-button-left');
    },
    "3.Click <svg>": function() {
        act.click('[ez5-loca-key="main.search.view.result-standard"] .cui-button-left');
    },
    "4.Click <svg>": function() {
        act.click('[ez5-loca-key="main.search.view.result-table"] .cui-button-left');
    },
    "5.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-angle-down").eq(2);
        };
        act.click(actionTarget);
    },
    '6.Click span "Mittel"': function() {
        act.click(":containsExcludeChildren(Mittel)");
    },
    '7.Click span "Groß"': function() {
        act.click(":containsExcludeChildren(Groß)");
    },
    '8.Click span "Klein"': function() {
        act.click(":containsExcludeChildren(Klein)");
    },
    '9.Click span "Nicht anzeigen"': function() {
        act.click(":containsExcludeChildren(Nicht anzeigen)");
    },
    '10.Click span "Standard"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Standard)").eq(1);
        };
        act.click(actionTarget);
    },
    '11.Click span "Tags"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tags)").eq(1);
        };
        act.click(actionTarget);
    },
    '12.Click span "Hierarchisch..."': function() {
        act.click(":containsExcludeChildren(Hierarchisch anzeigen)");
    }
};

"@test"["View Hierarchisch Test"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    
};