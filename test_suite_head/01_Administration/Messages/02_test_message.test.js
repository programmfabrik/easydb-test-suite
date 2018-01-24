"@fixture 02_Test Message";
"@page http://5.peter.pf-berlin.de/?login=root&password=admin";

"@test"["Test Message"] = {
    "2.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '1.Click span "Select"': function() {
        act.click(":containsExcludeChildren(Select)");
    },
    '3.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};