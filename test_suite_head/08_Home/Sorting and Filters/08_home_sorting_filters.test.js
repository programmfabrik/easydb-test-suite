"@fixture 08_Home_Sorting_Filters";
"@page http://10.122.4.25/search/?login=root&password=admin";


"@test"["01_Upload_for_Sorting_Filters_in_Allefelder"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "pb2-2.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/bmw-r80-auto-fabrica.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-template-einzeiligertext'] .cui-input", "Polar Bear");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};


"@test"["02_Upload_for_Sorting_Filters_in_Allefelder"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "pb2-2.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-template-einzeiligertext'] .cui-input", "nine t");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

"@test"["03_Upload_for_Sorting_Filters_in_Dateien"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Upload "jonston-moto-bmw-3-1200x800.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/jonston-moto-bmw-3-1200x800.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Alle Felder (DE)"': function() {
        act.click('[data-qa="editor-modal-new-objecttype-select"] span');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien (DE)"': function() {
        act.click(":containsExcludeChildren(Dateien DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Wait 1 milliseconds": function() {
        act.wait(2000);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-template-beschreibung'] .cui-input", "johnston custom");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};




"@test"["04_Objekttyp_Sort"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Sortierung: Kurzinfo"': function() {
        act.click(":containsExcludeChildren(Sortierung)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    }
};



"@test"["05_AnderungsHistorie_Sort"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Sortierung:..."': function() {
        act.click(":containsExcludeChildren(Sortierung)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(5);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Aufsteigend"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Aufsteigend)").eq(3);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Absteigend"': function() {
        act.click(":containsExcludeChildren(Absteigend)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    }
};

"@test"["06_Two_Sortings"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Sortierung:..."': function() {
        act.click(":containsExcludeChildren(Sortierung)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    }
};

"@test"["06_Two_Sortings_Reset"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Sortierung:..."': function() {
        act.click(":containsExcludeChildren(Sortierung)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        var actionTarget = function() {
            return $(".fa.fa-check").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click span": function() {
        var actionTarget = function() {
            return $(".fa.fa-check");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    }
};

"@test"["07_Sort_Specific"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};

"@test"["08_Filter_Objekttyp"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Filter"': function() {
        act.click('[title="search.main.button.filter"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Bilder"': function() {
        act.click(":containsExcludeChildren(Bilder)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "JPG"': function() {
        act.click(":containsExcludeChildren(JPG)");
    }
};

"@test"["09_Filter_Pictures_Filetype"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Bilder"': function() {
        act.click(":containsExcludeChildren(Bilder)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Aktueller Monat"': function() {
        act.click(":containsExcludeChildren(JPG)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Filter"': function() {
        act.click('[title="search.main.button.filter"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
};



"@test"["10_Filter_Upload"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};