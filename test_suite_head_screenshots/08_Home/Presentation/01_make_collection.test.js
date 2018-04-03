"@fixture 01_Make Collection";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["Create collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="collection.manager.button.add"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Meine Mappen)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Type in input": function() {
        act.type('[cui-data-field-name="displayname"] [cui-data-field-name="de-DE"] input', "BMW");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Drag div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.drag(actionTarget, -231, 31, {
            offsetX: 99,
            offsetY: 70
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "1"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(1)").eq(1);
        };
        act.click(actionTarget);
    }
};

