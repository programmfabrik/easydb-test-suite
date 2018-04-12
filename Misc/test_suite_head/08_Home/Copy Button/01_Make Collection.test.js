"@fixture 01_Make Collection";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["01_create_collection_to_copy"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Meine Mappen)");
        };
        act.rclick(actionTarget);
    },
     '2.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Neue Mappe unterhalb)");
        };
        act.click(actionTarget);
    },
    "3.Type in input": function() {
        act.type('[cui-data-field-name="displayname"] [cui-data-field-name="de-DE"] input', "Copiable");
    },
    '4.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};


