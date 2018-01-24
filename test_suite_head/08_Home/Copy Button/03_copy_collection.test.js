"@fixture 03_Copy Collection";
"@page http://5.peter.pf-berlin.de/search/?login=root&password=admin";



"@test"["Copy Collection right Click"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Mappe kopieren"': function() {
        act.click(":containsExcludeChildren(Mappe kopieren)");
    },
    '4.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};