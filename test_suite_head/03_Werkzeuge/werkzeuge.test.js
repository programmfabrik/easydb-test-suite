"@fixture Werkzeuge";
"@page http://5.peter.pf-berlin.de/search?login=root&password=admin";

"@test"["Migration"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-bars").eq(1);
        };
        act.click(actionTarget);
    },
    '3.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },
    '4.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },
    '5.Click span "Migration"': function() {
        act.click(":containsExcludeChildren(Migration)");
    },
    "6.Click div": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0)");
    }
};

