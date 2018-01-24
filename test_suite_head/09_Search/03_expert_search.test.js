"@fixture 03_Expert Search";
"@page http://5.peter.pf-berlin.de/search?login=root&password=admin";




"@test"["01_Click Everything"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        act.click('[data-qa="search-expert-button"] .fa-sliders');
    },
    "3.Type in input": function() {
        act.type('[cui-data-field-name="_system_object_id"] input', "1");
    },
    '4.Click span "Eingabe"': function() {
        act.click(":containsExcludeChildren(Eingabe)");
    },
    "5.Click input": function() {
        var actionTarget = function() {
            return $(".ez5-query-element-input-search-input").eq(0);
        };
        act.click(actionTarget);
    },
    '6.Click div "Root"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Root)").eq(1);
        };
        act.click(actionTarget);
    },
    "7.Click div": function() {
        var actionTarget = function() {
            return $(".cui-layer-backdrop").eq(1);
        };
        act.click(actionTarget);
    },
    "8.Click input": function() {
        act.click(".ez5-query-element-input-search-input");
    },
    '9.Click div "Root"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Root)").eq(2);
        };
        act.click(actionTarget);
    },
    '10.Click span "Tags"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tags)").eq(2);
        };
        act.click(actionTarget);
    },
    '11.Click span "Entwurf (DE)"': function() {
        act.click(":containsExcludeChildren(Entwurf DE)", {
            ctrl: true
        });
    },
    "12.Click div": function() {
        var actionTarget = function() {
            return $(".cui-layer-backdrop").eq(1);
        };
        act.click(actionTarget, {
            offsetX: 797,
            offsetY: 400
        });
    },
    '13.Click span "Verknüpfte..."': function() {
        act.click(":containsExcludeChildren(Verknüpfte Objekttypen)");
    },
    '14.Click span "Eigenschaften"': function() {
        act.click('[title="eas.column.search.button"] .cui-button-center');
    },
    '15.Click span "Alle"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle)").eq(12);
        };
        act.click(actionTarget);
    },
    '16.Click span "Bilder"': function() {
        act.click(":containsExcludeChildren(Bilder)");
    },
    '17.Click span "png"': function() {
        act.click(":containsExcludeChildren(png)", {
            ctrl: true
        });
    },
    "18.Click div": function() {
        var actionTarget = function() {
            return $(".cui-layer-backdrop").eq(1);
        };
        act.click(actionTarget);
    },
    '19.Click span "Tastaturbefehle"': function() {
        act.click(":containsExcludeChildren(Tastaturbefehle)");
    },
    '20.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '21.Click span "In die Suche..."': function() {
        act.click(":containsExcludeChildren(In die Suche übernehmen)");
    }
};