"@fixture 01_Server Status";
"@page http://5.peter.pf-berlin.de/?login=root&password=admin";

"@test"["Server Status"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },
    '3.Click span "Server-Status"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(ServerStatus)").eq(1);
        };
        act.click(actionTarget);
    },
    "4.Wait 5000 milliseconds": function() {
        act.wait(2e3);
    },
    '5.Click span "System"': function() {
        var actionTarget = function() {
            return $('[tab="system"] .cui-button-center')
        };
        act.click(actionTarget);
    },
    '6.Click span "Index"': function() {
        var actionTarget = function() {
            return $('[tab="index"] .cui-button-center')
        };
        act.click(actionTarget);
    },
    '7.Click span "easydb Asset..."': function() {
        var actionTarget = function() {
            return $('[tab="eas"] .cui-button-center')
        };
        act.click(actionTarget);
    },
    '8.Click span "Elasticsearch"': function() {
        var actionTarget = function() {
            return $('[tab="elasticsearch"] .cui-button-center')
        };
        act.click(actionTarget);
    }
};