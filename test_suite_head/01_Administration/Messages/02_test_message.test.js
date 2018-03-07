"@fixture 02_Test Message";
"@page http://10.122.4.25/?login=root&password=admin";

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