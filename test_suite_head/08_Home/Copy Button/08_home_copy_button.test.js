"@fixture 08_Home_Copy_Button";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["01_Create_Collection_to_Copy"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Meine Mappen)");
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
     '2.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Neue Mappe unterhalb)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Type in input": function() {
        act.type('[cui-data-field-name="displayname"] [cui-data-field-name="de-DE"] input', "Copiable");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};


"@test"["02_Copy_Asset_Sidebar_Editor"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(1);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Bearbeiten"': function() {
        act.click('[data-qa="asset-browser-detail-sidebar-load-editor-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[data-qa="toolbox-tool-editor-copy-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    }
};

"@test"["03_Copy_Fullscreen_Editor"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Bearbeiten"': function() {
        act.click('[data-qa="asset-browser-detail-sidebar-load-editor-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[data-qa="toolbox-tool-editor-sidebar-fullscreen-button"] .cui-button-left');
    }
};


"@test"["04_Copy_Collection_Right_Click"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Copiable)");
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Mappe kopieren"': function() {
        act.click(":containsExcludeChildren(Mappe kopieren)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};