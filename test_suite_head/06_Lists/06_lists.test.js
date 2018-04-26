"@fixture 06_Lists";
"@page http://10.122.4.25/lists/?login=root&password=admin";

"@test"["01_Lists_Main_Bar"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <": function() {
        act.click('[ez5-loca-key="base.help.flex_handle.close"] .fa-angle-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Objekttypen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Objekttypen)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Dateien (DE)"': function() {
        act.click(":containsExcludeChildren(Dateien DE)");
    }
};

"@test"["02_Asset_Viewing"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien DE)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click V": function() {
        act.click('[ez5-loca-key="result.manager.button.options"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Klein"': function() {
        act.click(":containsExcludeChildren(Klein)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Mittel"': function() {
        act.click(":containsExcludeChildren(Mittel)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Groß"': function() {
        act.click(":containsExcludeChildren(Groß)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click V": function() {
        act.click('[cui-data-field-name="page_size"] .fa-angle-down');
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Mittel"': function() {
        act.click(":containsExcludeChildren(Mittel)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click div": function() {
        act.click(".cui-layer-backdrop");
    }
};



"@test"["04_Upload_in_Lists_View"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="search.list.button.new_objects"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Type in input": function() {
        act.type('[data-qa="text-column-editor-einzeiligertext"] input', "new list image");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click upload zone ": function() {
        act.click('[ez5-loca-key="eas.column.upload.zone"]');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click Upload": function() {
        act.click('[data-qa="ez5-eas-column-editor-datei-horizontal-layout"] .fa-ellipsis-v');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Upload "BMW-R80-Scrambler-9.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/BMW-R80-Scrambler-9.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="editor.button.save"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Wait 3000 milliseconds": function() {
        act.wait(3e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click span "Dateien (DE)"': function() {
        act.click(":containsExcludeChildren(Dateien DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(0);
        };
        act.click(actionTarget);
    }
};