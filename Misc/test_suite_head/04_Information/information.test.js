"@fixture Information";
"@page http://10.122.4.25/?login=root&password=admin";


"@test"["Information"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.burger"] .fa-bars');
    },
    '3.Click span "Über..."': function() {
        var actionTarget = function() {
            return $('[data-qa="root-menu-app-root-menu-about-label"] .cui-button-center');
        };
        act.click(actionTarget);
    },
    '4.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};