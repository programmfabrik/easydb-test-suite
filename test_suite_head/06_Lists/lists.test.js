"@fixture Lists";
"@page http://5.peter.pf-berlin.de/lists/?login=root&password=admin";

"@test"["01_Lists Main Bar"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <": function() {
        act.click('[ez5-loca-key="base.help.flex_handle.close"] .fa-angle-left');
    },
    '3.Click span "Objekttypen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Objekttypen)").eq(1);
        };
        act.click(actionTarget);
    },
    '4.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click span "Dateien (DE)"': function() {
        act.click(":containsExcludeChildren(Dateien DE)");
    }
};

"@test"["02_Asset Viewing"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien DE)").eq(0);
        };
        act.click(actionTarget);
    },
    "3.Click V": function() {
        act.click('[ez5-loca-key="result.manager.button.options"] .cui-button-left');
    },
    '4.Click span "Klein"': function() {
        act.click(":containsExcludeChildren(Klein)");
    },
    '5.Click span "Mittel"': function() {
        act.click(":containsExcludeChildren(Mittel)");
    },
    '6.Click span "Groß"': function() {
        act.click(":containsExcludeChildren(Groß)");
    },
    "7.Click V": function() {
        act.click('[cui-data-field-name="page_size"] .fa-angle-down');
    },
    '9.Click span "Mittel"': function() {
        act.click(":containsExcludeChildren(Mittel)");
    },
    "10.Click div": function() {
        act.click(".cui-layer-backdrop");
    }
};



"@test"["04_Upload in Lists view"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="search.list.button.new_objects"] .fa-plus');
    },
    "3.Type in input": function() {
        act.type('[data-qa="text-column-editor-einzeiligertext"] input', "new list image");
    },
    "4.Click upload zone ": function() {
        act.click('[ez5-loca-key="eas.column.upload.zone"]');
    },
    "5.Click Upload": function() {
        act.click('[data-qa="ez5-eas-column-editor-datei-horizontal-layout"] .fa-ellipsis-v');
    },
    '6.Upload "BMW-R80-Scrambler-9.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/BMW-R80-Scrambler-9.jpg");
    },
    '7.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="editor.button.save"] .cui-button-center');
        };
        act.click(actionTarget);
    },
    "8.Wait 3000 milliseconds": function() {
        act.wait(3e3);
    },
    '1.Click span "Dateien (DE)"': function() {
        act.click(":containsExcludeChildren(Dateien DE)");
    },
    '2.Click span "Alle Felder (DE)"': function() {
        act.click(":containsExcludeChildren(Alle Felder DE)");
    },
    '9.Click div "new list image"': function() {
        act.click(":containsExcludeChildren(new list image)");
    }
};