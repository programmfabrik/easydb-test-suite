"@fixture 02_Presentation";
"@page http://5.peter.pf-berlin.de/search/?login=root&password=admin";



"@test"["01_Create Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Präsentation..."': function() {
        act.click('[title="tool.collection.presentation"] .cui-button-center');
    }
};

"@test"["02_Save Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Präsentation..."': function() {
        act.click('[title="tool.collection.presentation"] .cui-button-center');
    },
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },
    '5.Click span "Alle fehlenden..."': function() {
        act.click('[title="presentation.menu.add_all_missing"] .cui-button-center');
    },
    '6.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    "7.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },
    '8.Click span "Freier Text"': function() {
        act.click(":containsExcludeChildren(Freier Text)");
    },
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },
    '10.Click span "Ein Datensatz"': function() {
        act.click(":containsExcludeChildren(Ein Datensatz)");
    },
    "11.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },
    '12.Click span "Zwei Datensätze"': function() {
        act.click(":containsExcludeChildren(Zwei Datensätze)");
    },
    "13.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.add.button"] .cui-button-left');
    },
    '14.Click span "Freier Text"': function() {
        act.click(":containsExcludeChildren(Freier Text)");
    },
    "15.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.edit.minus.button"] .cui-button-left');
    },
    "16.Click settings": function() {
        act.click('[ez5-loca-key="presentation.button.settings"] .cui-button-left');
    },
    '17.Click span "Keine Information"': function() {
        act.click(":containsExcludeChildren(Keine Information)");
    },
    '18.Click span "Speichern"': function() {
        act.click('[ez5-loca-key="presentation.edit.save.button"] .cui-button-center');
    }
};

"@test"["03_Play Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="collection.workfolder.button.start_presentation"] .fa-play');
    },
    "3.Press key RIGHT": function() {
        act.press("right");
    },
    "4.Press key RIGHT": function() {
        act.press("right");
    },
    "5.Press key RIGHT": function() {
        act.press("right");
    },
    "6.Press key RIGHT": function() {
        act.press("right");
    },
    "7.Press key RIGHT": function() {
        act.press("right");
    },
    "8.Press key LEFT": function() {
        act.press("left");
    },
    "9.Press key RIGHT": function() {
        act.press("right");
    },
    "10.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.play.left.button"] .cui-button-left');
    },
    "11.Click div": function() {
        act.click('[ez5-loca-key="presentation.play.right.button"] .cui-button-left');
    },
    "12.Press key ESC": function() {
        act.press("esc");
    }
};

"@test"["04_Download Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Präsentation..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Präsentation)").eq(0);
        };
        act.click(actionTarget);
    },
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="presentation.button.download"] .cui-button-left');
    },
    '5.Click span "Powerpoint..."': function() {
        act.click(":containsExcludeChildren(Powerpoint)");
    },
    '6.Click span "Herunterladen"': function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="download.manager.modal.button.start"] .cui-button-center');
        };
        act.click(actionTarget);
    }
};

"@test"["05_Schlagworter Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};

"@test"["06_Delete Presentation"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Präsentation..."': function() {
        act.click(":containsExcludeChildren(Präsentation)");
    },
    '4.Click span "Löschen"': function() {
        act.click(":containsExcludeChildren(Löschen)");
    },
    '5.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};

