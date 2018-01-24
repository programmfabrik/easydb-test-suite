"@fixture 02_targeted searches";
"@page http://5.peter.pf-berlin.de/search?login=root&password=admin";

"@test"["01_search umlauts"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },
    '3.Type in span "ä"': function() {
        act.type(".ez5-query-element-input.focus", "ä");
    },
    "4.Press key ENTER": function() {
        act.press("enter");
    },
    '5.Type in span "ü"': function() {
        act.type(".ez5-query-element-input.focus", "ü");
    },
    '6.Click span "ü"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(ü)").eq(1);
        };
        act.click(actionTarget);
    },
    "7.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-search").eq(1);
        };
        act.click(actionTarget);
    },
    "8.Click <svg>": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click <svg>": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "10.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },
    '11.Type in span "üöä"': function() {
        act.type(".ez5-query-element-input.focus", "üöä");
    },
    "12.Press key ENTER": function() {
        act.press("enter");
    }
};


"@test"["02_upload pic put umlauts in title"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/BMW-R-nineT-5.jpg");
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
     "6.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "üöä bmw r nine t");
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};


"@test"["03_upload pic with umlauts in filename"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/üöä.jpg");
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
     "6.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "BMW R nineT Racer");
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

"@test"["04_search umlauts check results"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },
    '3.Type in span "ä"': function() {
        act.type(".ez5-query-element-input.focus", "ä");
    },
    "4.Press key ENTER": function() {
        act.press("enter");
    },
    '5.Type in span "ü"': function() {
        act.type(".ez5-query-element-input.focus", "ü");
    },
    '6.Click span "ü"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(ü)").eq(1);
        };
        act.click(actionTarget);
    },
    "7.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-search").eq(1);
        };
        act.click(actionTarget);
    },
    "8.Click <svg>": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click <svg>": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "10.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },
    '11.Type in span "üöä"': function() {
        act.type(".ez5-query-element-input.focus", "üöä");
    },
    "12.Press key ENTER": function() {
        act.press("enter");
    },
    '13.Click span "BMW R nineT Racer"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW R nineT Racer)").eq(0);
        };
        act.click(actionTarget);
    },
    '14.Click span "üöä bmw r nine t"': function() {
        act.click(":containsExcludeChildren(üöä bmw r nine t)");
    }
};