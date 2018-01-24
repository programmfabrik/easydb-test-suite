"@fixture 01_Make Collection";
"@page http://5.peter.pf-berlin.de/search/?login=root&password=admin";

"@test"["Create collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="collection.manager.button.add"] .cui-button-left');
    },
    '3.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Meine Mappen)").eq(1);
        };
        act.click(actionTarget);
    },
    "4.Type in input": function() {
        act.type(".cui-form-field-name--input input", "BMW");
    },
    '5.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    },
    "6.Drag div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.drag(actionTarget, -231, 31, {
            offsetX: 99,
            offsetY: 70
        });
    },
    '7.Click span "1"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(1)").eq(1);
        };
        act.click(actionTarget);
    }
};

