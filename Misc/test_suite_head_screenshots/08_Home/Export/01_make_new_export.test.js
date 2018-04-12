"@fixture 01_Make New Export";
"@page http://10.122.4.25/search?login=root&password=admin";

"@test"["00_quick_upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".fa.fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "crd72-cafe-racer-crd-bmw-r100-1.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/crd72-cafe-racer-crd-bmw-r100-1.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "crd72-cafe-racer-bmw-r100");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};



"@test"["01_simple export"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0)
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Exportieren..."': function() {
        act.click(":containsExcludeChildren(Exportieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Exportieren"': function() {
        act.click(":containsExcludeChildren(Exportieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-input.cui-data-field.cui-data-field-input.cui-input-has-no-user-input.cui-has-focus").find(" > input:nth(0)");
        };
        act.type(actionTarget, "simple export");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};


"@test"["02_check simple export"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(":attrRegExp(class:/^fa\\s+fa\\-download$/)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "simple export"': function() {
        act.click(":containsExcludeChildren(simple export)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-trash-o").eq(0);
        };
        act.click(actionTarget);
    }
};


