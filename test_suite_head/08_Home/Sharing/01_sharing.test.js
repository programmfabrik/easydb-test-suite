"@fixture 01_Sharing";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["00_quick_upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    "2.Click <i>": function() {
        act.click(".fa.fa-plus");
    },
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },
    '4.Upload "crd72-cafe-racer-crd-bmw-r100-1.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/BMW-K100-Cafe-Racer-7.jpg");
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    "6.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "bmw k100 racer 7");
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

"@test"["01_create collection"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Meine Mappen)");
        };
        act.rclick(actionTarget);
    },
     '2.Click span "Meine Mappen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Neue Mappe unterhalb)");
        };
        act.click(actionTarget);
    },
    "3.Type in input": function() {
        act.type('[cui-data-field-name="displayname"] [cui-data-field-name="de-DE"] input', "BMW");
    },
    '4.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};




"@test"["02_Share from Recherche"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.click(actionTarget);
    },
    "3.Click <i>": function() {
        act.click('[data-qa="toolbox-tool-search-present_share_url-button"] .cui-button-left');
    },
    '4.Click span "Fertig"': function() {
        act.click(":containsExcludeChildren(Fertig)");
    }
};





"@test"["03_Share Collection with end date"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },
    "3.Click share": function() {
        act.click('[title="tool.collection.share"] .cui-button-center');
    },
    "4.Click add": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .cui-button-left');
    },
    '5.Click span "Link erzeugen für..."': function() {
        act.click(":containsExcludeChildren(Link erzeugen für externen Zugriff)");
    },
    "6.Click div": function() {
        var actionTarget = function() {
            return $(".cui-lv-tr").eq(7);
        };
        act.click(actionTarget);
    },
    "7.Click <i>": function() {
        act.click(".fa.fa-calendar");
    },
    '8.Click div "20"': function() {
        act.click(".cui-date-time-now");
    },
    "9.Click div": function() {
        var actionTarget = function() {
            return $(".cui-lv-tr").eq(7);
        };
        act.click(actionTarget);
    },
    "10.Click div": function() {
        act.click('[col="6"] .fa-bars');
    },
    '11.Click span "Datensätze ansehen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Datensätze ansehen)").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click span "Anwenden"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    },
    '13.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(1);
        };
        act.click(actionTarget);
    }
};

"@test"["04_Share Click everything"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Rclick div "BMW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BMW)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Freigabe..."': function() {
        act.click(":containsExcludeChildren(Freigabe)");
    },
    '4.Click span "Allgemein"': function() {
        act.click('[tab="general"] .cui-button-center');
    },
    '5.Click span "Hochladen"': function() {
        act.click('[tab="create_objects"] .cui-button-center');
    },
    '6.Click label "Hochladen in diese..."': function() {
        act.click(":containsExcludeChildren(Hochladen in diese Mappe aktivieren)");
    },
    '7.Click span "Teilen"': function() {
        act.click('[tab="share"] .cui-button-center');
    },
    '3.Click span "Berechtigungen..."': function() {
        act.click(":containsExcludeChildren(Berechtigungen übergeordneter Mappen ignorieren)");
    },
    "9.Click bars": function() {
        act.click('[col="6"] .fa-bars');
    },
    '10.Click label "Persistent"': function() {
        act.click(":containsExcludeChildren(Persistent)");
    },
    '11.Click span "Datensätze..."': function() {
        act.click(":containsExcludeChildren(Datensätze ansehen bearbeiten entfernen)");
    },
    '12.Click span "Mit Berechtigung..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Mit Berechtigung zur Weitergabe)").eq(2);
        };
        act.click(actionTarget);
    },
    '13.Click span "Datensätze in die..."': function() {
        act.click(":containsExcludeChildren(Datensätze in die Mappe ziehen)", {
            ctrl: true
        });
    },
    '14.Click span "Datensätze aus der..."': function() {
        act.click(":containsExcludeChildren(Datensätze aus der Mappe entfernen)", {
            ctrl: true
        });
    },
    '15.Click span "Datensätze direkt..."': function() {
        act.click(":containsExcludeChildren(Datensätze direkt in der Mappe erzeugen)");
    },
    '16.Click span "Versionen ansehen"': function() {
        act.click(":containsExcludeChildren(Versionen ansehen)");
    },
    '17.Click span "Versionen..."': function() {
        act.click(":containsExcludeChildren(Versionen herunterladen)");
    },
    '18.Click span "Datei hochladen"': function() {
        act.click(":containsExcludeChildren(Datei hochladen)");
    },
    '19.Click span "Mappe ansehen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Mappe ansehen)").eq(0);
        };
        act.click(actionTarget);
    },
    '20.Click span "Berechtigungen der..."': function() {
        act.click(":containsExcludeChildren(Berechtigungen der Mappe bearbeiten)");
    },
    '21.Click span "Untermappe erzeugen"': function() {
        act.click(":containsExcludeChildren(Untermappe erzeugen)");
    },
    '22.Click span "Anwenden"': function() {
        act.click(":containsExcludeChildren(Anwenden)");
    },
    '23.Click span "Aktivieren"': function() {
        act.click(":containsExcludeChildren(Aktivieren)");
    }
};


