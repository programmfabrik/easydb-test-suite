"@fixture 03_Delete Photo";
"@page http://10.122.4.25/search/?login=root&password=admin";



"@test"["delete photo"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Datensatz löschen..."': function() {
        act.click(":containsExcludeChildren(Datensatz löschen)");
    },
    '4.Click span "Löschen"': function() {
        act.click(":containsExcludeChildren(Löschen)");
    }
};