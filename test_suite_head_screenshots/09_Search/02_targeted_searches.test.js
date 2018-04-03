"@fixture 02_targeted searches";
"@page http://10.122.4.25/search?login=root&password=admin";

"@test"["01_search umlauts"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Type in span "ä"': function() {
        act.type(".ez5-query-element-input.focus", "ä");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Press key ENTER": function() {
        act.press("enter");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Type in span "ü"': function() {
        act.type(".ez5-query-element-input.focus", "ü");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "ü"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(ü)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-search").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click <svg>": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <svg>": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Type in span "üöä"': function() {
        act.type(".ez5-query-element-input.focus", "üöä");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Press key ENTER": function() {
        act.press("enter");
    }
};


"@test"["02_upload pic put umlauts in title"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/BMW-R-nineT-5.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
     "6.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "üöä bmw r nine t");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};


"@test"["03_upload pic with umlauts in filename"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/üöä.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
     "6.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "BMW R nineT Racer");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

"@test"["04_search umlauts check results"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Type in span "ä"': function() {
        act.type(".ez5-query-element-input.focus", "ä");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Press key ENTER": function() {
        act.press("enter");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Type in span "ü"': function() {
        act.type(".ez5-query-element-input.focus", "ü");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "ü"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(ü)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-search").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click <svg>": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <svg>": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Type in span "üöä"': function() {
        act.type(".ez5-query-element-input.focus", "üöä");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Press key ENTER": function() {
        act.press("enter");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "BMW R nineT Racer"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW R nineT Racer)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "üöä bmw r nine t"': function() {
        act.click(":containsExcludeChildren(üöä bmw r nine t)");
    }
};