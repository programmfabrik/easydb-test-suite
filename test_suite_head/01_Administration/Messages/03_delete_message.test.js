"@fixture 03_Delete Message";
"@page http://5.peter.pf-berlin.de/adminmessagesmanager/?login=root&password=admin";

"@test"["Delete Message"] = {
    "2.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '1.Click div "Hello World"': function() {
        act.click(":containsExcludeChildren(Hello World)");
    },
    "2.Click <i>": function() {
        act.click(".fa.fa-minus");
    },
    "3.Click ok": function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};