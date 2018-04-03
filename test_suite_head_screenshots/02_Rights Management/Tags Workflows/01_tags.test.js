"@fixture 01_Tags";
"@page http://10.122.4.25/tagmanager/?login=root&password=admin";



"@test"["01_Redaktion Tags Group"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="tag.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Tag-Gruppe"': function() {
        act.click(":containsExcludeChildren(TagGruppe)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Type in input": function() {
        act.type('[row="1"] [cui-data-field-name="displayname"] input', "Redaktion Tags");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Checkbox"': function() {
        act.click(":containsExcludeChildren(Checkbox)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Auswahl"': function() {
        act.click(":containsExcludeChildren(Auswahl)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click <i>": function() {
        act.click('[row="1"] [col="4"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Type in input "Kurzname"': function() {
        act.type('[cui-data-field-name="shortname"] input', "redak");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};

"@test"["02_Redaktion Tags"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[row="1"] [col="0"] .cui-drag-handle-row');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click +": function() {
        act.click('[ez5-loca-key="tag.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Tag"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tag)").eq(5);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click +": function() {
        act.click('[ez5-loca-key="tag.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Tag"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tag)").eq(5);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click div": function() {
        act.click('[ez5-loca-key="tag.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Tag"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tag)").eq(5);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        act.click('[ez5-loca-key="tag.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Tag"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tag)").eq(5);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Type in input": function() {
        act.type('[row="2"] [col="1"] input', "Entwurf");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Type in input": function() {
        act.type('[row="3"] [col="1"] input', "Erstversion");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in input": function() {
        act.type('[row="4"] [col="1"] input', "Veroffentlichen");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in input": function() {
        act.type('[row="5"] [col="1"] input', "Redaktion");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Click div": function() {
        var actionTarget = function() {
            return $(".cui-horizontal-layout-center").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "13.Click div": function() {
        act.click('[row="2"] [cui-data-field-name="color"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    "14.Click <i>": function() {
        act.click(".fa.css-swatch.ez5-tag-color-green");
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        act.click('[row="3"] [cui-data-field-name="color"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    "16.Click <i>": function() {
        act.click(".fa.css-swatch.ez5-tag-color-red");
    },"1.Take a screenshot": function() {act.screenshot();},
    "17.Click div": function() {
        act.click('[row="4"] [cui-data-field-name="color"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click <i>": function() {
        act.click(".fa.css-swatch.ez5-tag-color-blue");
    },"1.Take a screenshot": function() {act.screenshot();},
    "17.Click div": function() {
        act.click('[row="5"] [cui-data-field-name="color"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click <i>": function() {
        act.click(".fa.css-swatch.ez5-tag-color-orange");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};




"@test"["03_Sonderzeichen Tags Group"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="tag.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Tag-Gruppe"': function() {
        act.click(":containsExcludeChildren(TagGruppe)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Type in input": function() {
        act.type('[row="2"] [cui-data-field-name="displayname"] input', "Sonderzeichen Tags");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Checkbox"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Checkbox)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Auswahl"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Auswahl)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click <i>": function() {
        act.click('[row="2"] [col="4"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Type in input "Kurzname"': function() {
        act.type('[cui-data-field-name="shortname"] input', "sonder");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};