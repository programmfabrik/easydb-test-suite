"@fixture 08_Home_Presentation";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["01_Create_Collection_to_Present"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="collection.manager.button.add"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Meine Mappen)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Type in input": function() {
        act.type('[cui-data-field-name="displayname"] [cui-data-field-name="de-DE"] input', "BMW");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Drag div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.drag(actionTarget, -231, 31, {
            offsetX: 99,
            offsetY: 70
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "1"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(1)").eq(1);
        };
        act.click(actionTarget);
    }
};



"@test"["02_Create_Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Präsentation..."': function() {
        act.click('[title="tool.collection.presentation"] .cui-button-center');
    }
};

"@test"["03_Save_Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Präsentation..."': function() {
        act.click('[title="tool.collection.presentation"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle fehlenden..."': function() {
        act.click('[title="presentation.menu.add_all_missing"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Freier Text"': function() {
        act.click(":containsExcludeChildren(Freier Text)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Ein Datensatz"': function() {
        act.click(":containsExcludeChildren(Ein Datensatz)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Zwei Datensätze"': function() {
        act.click(":containsExcludeChildren(Zwei Datensätze)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "13.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Freier Text"': function() {
        act.click(":containsExcludeChildren(Freier Text)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.minus.button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "16.Click settings": function() {
        act.click('[ez5-loca-key="presentation.button.settings"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Keine Information"': function() {
        act.click(":containsExcludeChildren(Keine Information)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Speichern"': function() {
        act.click('[ez5-loca-key="presentation.edit.save.button"] .cui-button-center');
    }
};

"@test"["04_Play_Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="collection.workfolder.button.start_presentation"] .fa-play');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Press key RIGHT": function() {
        act.press("right");
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Press key RIGHT": function() {
        act.press("right");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Press key RIGHT": function() {
        act.press("right");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Press key RIGHT": function() {
        act.press("right");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Press key RIGHT": function() {
        act.press("right");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Press key LEFT": function() {
        act.press("left");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Press key RIGHT": function() {
        act.press("right");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.play.left.button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Click div": function() {
        act.click('[ez5-loca-key="presentation.play.right.button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Press key ESC": function() {
        act.press("esc");
    }
};

"@test"["05_Download_Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Präsentation..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Präsentation)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.button.download"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Powerpoint..."': function() {
        act.click(":containsExcludeChildren(Powerpoint)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Herunterladen"': function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="download.manager.modal.button.start"] .cui-button-center');
        };
        act.click(actionTarget);
    }
};

"@test"["06_Schlagworter_Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};

"@test"["07_Delete_Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Präsentation..."': function() {
        act.click(":containsExcludeChildren(Präsentation)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Löschen"': function() {
        act.click(":containsExcludeChildren(Löschen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};

