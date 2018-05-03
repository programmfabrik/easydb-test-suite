"@fixture 01_Administration_Server_Status";
"@page http://10.122.4.25/?login=root&password=admin";

"@test"["01_Serve_Status"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Server-Status"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(ServerStatus)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Wait 5000 milliseconds": function() {
        act.wait(2e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "System"': function() {
        var actionTarget = function() {
            return $('[tab="system"] .cui-button-center')
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Index"': function() {
        var actionTarget = function() {
            return $('[tab="index"] .cui-button-center')
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "easydb Asset..."': function() {
        var actionTarget = function() {
            return $('[tab="eas"] .cui-button-center')
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Elasticsearch"': function() {
        var actionTarget = function() {
            return $('[tab="elasticsearch"] .cui-button-center')
        };
        act.click(actionTarget);
    }
};