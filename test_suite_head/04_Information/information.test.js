"@fixture Information";
"@page http://10.122.4.25/?login=root&password=admin";


"@test"["Information"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5);
    },
    "2.Click <i>": function() {
        act.click('[title="root.menu.submenu.zzz_info"] .cui-button-left');
    },
    '3.Click span "Über..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Über)").eq(1);
        };
        act.click(actionTarget);
    },
    '4.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};