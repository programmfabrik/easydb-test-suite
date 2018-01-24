"@fixture 01_Make New Export";
"@page http://5.peter.pf-berlin.de/search?login=root&password=admin";


"@test"["01_simple export"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0)
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Exportieren..."': function() {
        act.click(":containsExcludeChildren(Exportieren)");
    },
    '4.Click span "Exportieren"': function() {
        act.click(":containsExcludeChildren(Exportieren)");
    },
    "5.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-input.cui-data-field.cui-data-field-input.cui-input-has-no-user-input.cui-has-focus").find(" > input:nth(0)");
        };
        act.type(actionTarget, "simple export");
    },
    '6.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};


"@test"["02_check simple export"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        act.click(":attrRegExp(class:/^fa\\s+fa\\-download$/)");
    },
    '3.Click span "simple export"': function() {
        act.click(":containsExcludeChildren(simple export)");
    },
    "4.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-trash-o").eq(0);
        };
        act.click(actionTarget);
    }
};