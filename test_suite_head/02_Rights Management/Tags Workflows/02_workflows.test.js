"@fixture 02_Workflows";
"@page http://5.peter.pf-berlin.de/tagmanager/?login=root&password=admin";


"@test"["01_Einfügen Workflow"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    '2.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "3.Click div": function() {
        var actionTarget = function() {
            return $(".cui-loca-button.cui-button-button.cui-button.cui-first-visible-child").find(" > div:nth(0)").eq(1);
        };
        act.click(actionTarget);
    },
    "4.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click span "Objekttypen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '6.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(".cui-button-center").filter(function(index, span) { return span.textContent === "Alle Felder (DE)"; })[0]
        };
        act.click(actionTarget);
    },
    '7.Click span "Dateien (DE)"': function() {
        var actionTarget = function() {
            return $(".cui-button-center").filter(function(index, span) { return span.textContent === "Dateien (DE)"; })[0]
        };
        act.click(actionTarget);
    },
    "8.Click span": function() {
        var actionTarget = function() {
            return $(".ez5-col-admin-transitionform-col-insert .cui-button-left")
        };
        act.click(actionTarget);
    },
    '9.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '10.Click span "Benutzer/Gruppe"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "11.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(3);
        };
        act.click(actionTarget);
    },
    "12.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-data-field .fa-angle-down")[3];
        };
        act.click(actionTarget);
    },
    '13.Click div "Alle Benutzer"': function() {
        var actionTarget = function() {
            return $(".cui-label.cui-label").find(" > div:nth(1)").eq(1);
        };
        act.click(actionTarget);
    },
    '14.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '15.Click span "Tags anpassen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "16.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(3);
        };
        act.click(actionTarget);
    },
    '17.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '18.Click span "Tags anpassen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "19.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(7);
        };
        act.click(actionTarget);
    },
    '20.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '21.Click span "Bearbeiten"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "22.Type in text area": function() {
        var actionTarget = function() {
            return $(".cui-data-field-multi-input-center").find(" > textarea:nth(0)").eq(0);
        };
        act.type(actionTarget, "Einfügen Bestätigung (DE)");
    },
    "23.Type in text area": function() {
        var actionTarget = function() {
            return $(".cui-data-field-multi-input-center").find(" > textarea:nth(0)").eq(1);
        };
        act.type(actionTarget, "Einfügen Bestätigung (US)");
    },
    "24.Type in text area": function() {
        var actionTarget = function() {
            return $(".cui-data-field-multi-input-center").find(" > textarea:nth(0)").eq(2);
        };
        act.type(actionTarget, "Einfügen Bestätigung (ES)");
    },
    "25.Type in text area": function() {
        var actionTarget = function() {
            return $(".cui-data-field-multi-input-center").find(" > textarea:nth(0)").eq(3);
        };
        act.type(actionTarget, "Einfügen Bestätigung (IT)");
    },
    '26.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '27.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "28.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    '29.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "30.Assert": function() {
        eq($(":containsExcludeChildren(Einfügen Bestätigung DE)").length, 1);
    }
};


"@test"["02_Update Workflow"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    '2.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "3.Click div": function() {
        var actionTarget = function() {
            return $(".cui-loca-button.cui-button-button.cui-button.cui-first-visible-child").find(" > div:nth(0)").eq(1);
        };
        act.click(actionTarget);
    },
    "4.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(4);
        };
        act.click(actionTarget);
    },'20.Click span "Benutzer/Gruppe"': function() {
        var actionTarget = function() {
            return $("[row='3'] .cui-button-center").filter(function(index, span) { return span.textContent === "Benutzer/Gruppe"; })[0]
        };
        act.click(actionTarget);
    
    },
    "21.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-simple-pane .cui-button-left .fa-plus");
        };
        act.click(actionTarget);
    },
    "22.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-simple-pane .cui-button-left .fa-angle-down")
        };
        act.click(actionTarget);
    },
    "23.Click div": function() {
        var actionTarget = function() {
            return $(".cui-label-content").filter(function(index, div) { return div.textContent === "Alle Benutzer"; })[0]
        };
        act.click(actionTarget);
    },
    '9.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '5.Click span "Objekttypen"': function() {
        var actionTarget = function() {
            return $(".cui-button-center").filter(function(index, span) { return span.textContent === "Objekttypen"; })[1]
        };
        act.click(actionTarget);
    },
    '6.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(".cui-button-center").filter(function(index, span) { return span.textContent === "Alle Felder (DE)"; })[0]
        };
        act.click(actionTarget);
    },
    '92.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '10.Click span "Tags anpassen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "11.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(9);
        };
        act.click(actionTarget);
    },
    '12.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '13.Click span "Tags anpassen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(7) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "14.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(14);
        };
        act.click(actionTarget);
    },
    '15.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '16.Click span "Bearbeiten"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "17.Type in text area": function() {
        var actionTarget = function() {
            return $(".cui-data-field-multi-input-center").find(" > textarea:nth(0)").eq(0);
        };
        act.type(actionTarget, "Update Bestätigung (DE)");
    },
    "18.Type in text area": function() {
        var actionTarget = function() {
            return $(".cui-data-field-multi-input-center").find(" > textarea:nth(0)").eq(1);
        };
        act.type(actionTarget, "Update Bestätigung (US)");
    },
    "19.Type in text area": function() {
        var actionTarget = function() {
            return $(".cui-data-field-multi-input-center").find(" > textarea:nth(0)").eq(2);
        };
        act.type(actionTarget, "Update Bestätigung (ES)");
    },
    "20.Type in text area": function() {
        var actionTarget = function() {
            return $(".cui-data-field-multi-input-center").find(" > textarea:nth(0)").eq(3);
        };
        act.type(actionTarget, "Update Bestätigung (IT)");
    },
    '21.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '22.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "23.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    '24.Click span "Workflows"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "25.Assert": function() {
        eq($(".cui-label.cui-label-multiline").find(" > div:nth(0)").eq(7).length, 1);
    }
};




"@test"["03_Löschen Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Workflows"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Workflows)").eq(1);
        };
        act.click(actionTarget);
    },
    "3.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    "4.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '5.Click span "Objekttypen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Objekttypen)").eq(3);
        };
        act.click(actionTarget);
    },
    "6.Click span": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "7.Click span": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "8.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    '9.Click span "Benutzer/Gruppe"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BenutzerGruppe)").eq(3);
        };
        act.click(actionTarget);
    },
    "10.Click <i>": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > i:nth(0)");
    },
    "11.Click <i>": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > i:nth(0)");
    },
    '12.Click div "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },
    "13.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0)");
    },
    '14.Click span "Tags anpassen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "15.Click span": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "16.Click span": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(8) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "17.Click span": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(9) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "18.Click span": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "19.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0)");
    },
    '20.Click span "Tags anpassen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Tags anpassen)").eq(5);
        };
        act.click(actionTarget);
    },
    "21.Click span": function() {
        act.click("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "22.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0)");
    },
    '23.Click span "Bearbeiten"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Bearbeiten)").eq(2);
        };
        act.click(actionTarget);
    },
    "24.Type in text area": function() {
        act.type("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "asdf");
    },
    "25.Type in text area": function() {
        act.type("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "asdfa");
    },
    "26.Type in text area": function() {
        act.type("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "f");
    },
    "27.Type in text area": function() {
        act.type("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "asdf");
    },
    "28.Type in text area": function() {
        act.type("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "asdfa");
    },
    "29.Type in text area": function() {
        act.type("body > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "f");
    },
    "30.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0)");
    },
    '31.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};