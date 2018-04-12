"@fixture 03_ToolBoxtools_Delete_Photo";
"@page http://10.122.4.25/search/?login=root&password=admin";



"@test"["03_ToolBoxtools_Delete_Photo"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Datensatz löschen..."': function() {
        act.click(":containsExcludeChildren(Datensatz löschen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Löschen"': function() {
        act.click(":containsExcludeChildren(Löschen)");
    }
};