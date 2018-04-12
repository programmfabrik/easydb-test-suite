"@fixture 02_Workflows";
"@page http://10.122.4.25/tagmanager/?login=root&password=admin";












"@test"["01_Insert Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click span "Workflows"': function() {
        act.click('[tab="transitions"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="transition.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        act.click('[row="2"] [col="1"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Objekttypen"': function() {
        act.click('[row="2"] [title="tag.transition.objecttype.button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle Felder (DE)"': function() {
        act.click(":containsExcludeChildren(Alle Felder DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Dateien (DE)"': function() {
        act.click(":containsExcludeChildren(Dateien DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Benutzer/Gruppe"': function() {
        act.click('[row="2"] [title="acl.manager.button.open_popover"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click input": function() {
        act.click(".ez5-query-element-input-search-input");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click div "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Tags anpassen"': function() {
        act.click('[row="2"] [col="7"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "14.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(3);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Tags anpassen"': function() {
        act.click('[row="2"] [col="8"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "17.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(7);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Bearbeiten"': function() {
        act.click('[row="2"] [col="9"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Type in text area": function() {
        act.type("textarea", "Einfugen");
    },"1.Take a screenshot": function() {act.screenshot();},
    "21.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};

"@test"["02_Update workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click span "Workflows"': function() {
        act.click('[tab="transitions"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="transition.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        act.click('[row="3"] [col="2"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Objekttypen"': function() {
        act.click('[row="3"] [title="tag.transition.objecttype.button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(1);
        };
        act.click(actionTarget);
    
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Dateien (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien DE)").eq(1);
        };
        act.click(actionTarget);
    
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Benutzer/Gruppe"': function() {
        act.click('[row="3"] [title="acl.manager.button.open_popover"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click input": function() {
        act.click(".ez5-query-element-input-search-input");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click div "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Tags anpassen"': function() {
        act.click('[row="3"] [col="7"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
   "2.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(9);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Tags anpassen"': function() {
        act.click('[row="3"] [col="8"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(14);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Bearbeiten"': function() {
        act.click('[row="3"] [col="9"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Type in text area": function() {
        act.type("textarea", "Update");
    },"1.Take a screenshot": function() {act.screenshot();},
    "21.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};


"@test"["03_Delete workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click span "Workflows"': function() {
        act.click('[tab="transitions"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="transition.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        act.click('[row="4"] [col="3"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Objekttypen"': function() {
        act.click('[row="4"] [title="tag.transition.objecttype.button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
   '5.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(2);
        };
        act.click(actionTarget);
    
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Dateien (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien DE)").eq(2);
        };
        act.click(actionTarget);
    
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Benutzer/Gruppe"': function() {
        act.click('[row="4"] [title="acl.manager.button.open_popover"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click input": function() {
        act.click(".ez5-query-element-input-search-input");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click div "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
   
    '16.Click span "Tags anpassen"': function() {
        act.click('[row="4"] [col="8"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(22);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Bearbeiten"': function() {
        act.click('[row="4"] [col="9"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Type in text area": function() {
        act.type("textarea", "Delete");
    },"1.Take a screenshot": function() {act.screenshot();},
    "21.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};