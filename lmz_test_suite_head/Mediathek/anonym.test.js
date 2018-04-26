"@fixture Mediathek_Anonym";
"@page https://test-mediathek.lmz-bw.de/mediathek";

"@test"["Register_and_Help"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(7e3);
    },
    '2.Click span "Registrieren"': function() {
        act.click(":containsExcludeChildren(Registrieren)");
    },
    "3.Take a screenshot": function() {
        act.screenshot();
    },
    "4.Click use": function() {
         var actionTarget = function() {
            return  $('[aria-label="Schließen"] .svg-close');
        };
        act.click(actionTarget);
    },
    '5.Click span "Hilfe"': function() {
        act.click(":containsExcludeChildren(Hilfe)");
    },
    "6.Take a screenshot": function() {
        act.screenshot();
    },
    "4.Click use": function() {
         var actionTarget = function() {
            return  $('[aria-label="Schließen"] .svg-close');
        };
        act.click(actionTarget);
    }
}

"@test"["Foot_Menu"] = { 
    "1.Wait 5000 milliseconds": function() {
        act.wait(7e3);
    },   
    '8.Click span "Impressum"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Impressum)").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Take a screenshot": function() {
        act.screenshot();
    },
    '10.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '11.Click span "Allgemeine..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Allgemeine Nutzungsbedingungen)").eq(0);
        };
        act.click(actionTarget);
    },
    "12.Take a screenshot": function() {
        act.screenshot();
    },
    '13.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '14.Click span "SESAM-Hotline"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(SESAMHotline)").eq(0);
        };
        act.click(actionTarget);
    },
    "15.Take a screenshot": function() {
        act.screenshot();
    },
    '16.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '17.Click span "Einwilligungserklär..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Einwilligungserklärung)").eq(0);
        };
        act.click(actionTarget);
    },
    "18.Take a screenshot": function() {
        act.screenshot();
    },
    '19.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
}

"@test"["License_MZ_Karlsruhe_with_Checkboxes"] = {    
    "1.Wait 5000 milliseconds": function() {
        act.wait(7e3);
    },
    "20.Click <i>": function() {
        act.click('[cui-data-field-name="lizenznehmer"] .fa-angle-down');
    },
    '21.Click span "MZ Karlsruhe"': function() {
        act.click(":containsExcludeChildren(MZ Karlsruhe)");
    },
    "22.Take a screenshot": function() {
        act.screenshot();
    },
    '23.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    '24.Click span "Nur nach..."': function() {
        act.click(":containsExcludeChildren(Nur nach Unterrichtsmodulen suchen)");
    },
    "25.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    '26.Click span "OER (Open..."': function() {
        act.click(":containsExcludeChildren(OER Open Educational Resources Schülerrecherche)");
    },
    '27.Click span "Nur empfohlene..."': function() {
        act.click(":containsExcludeChildren(Besonders empfohlene Medien)");
    },
    "28.Take a screenshot": function() {
        act.screenshot();
    },
    "29.Click <i>": function() {
        act.click('[cui-data-field-name="sort"] .fa-angle-down');
    },
    '30.Click span "Produktionsjahr"': function() {
        act.click(":containsExcludeChildren(Produktionsjahr)");
    },
    "31.Take a screenshot": function() {
        act.screenshot();
    },
    '32.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    '33.Click span "Nur nach..."': function() {
        act.click(":containsExcludeChildren(Nur nach Unterrichtsmodulen suchen)");
    },
    "1.Wait 5000 milliseconds": function() {
        act.wait(3e3);
    } 
}
 
"@test"["Sort_Data"] = {    
    "1.Wait 5000 milliseconds": function() {
        act.wait(7e3);
    },
    "38.Click <i>": function() {
        act.click('[cui-data-field-name="fach"] .fa-angle-down');
    },
    '39.Click span "Biologie"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Biologie)").eq(0);
        };
        act.click(actionTarget);
    },
    "40.Take a screenshot": function() {
        act.screenshot();
    },
    '41.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    '42.Click span "Grundschule"': function() {
        act.click(":containsExcludeChildren(Grundschule)");
    },
    "43.Take a screenshot": function() {
        act.screenshot();
    },
    '44.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    '45.Click span "Film"': function() {
        act.click(":containsExcludeChildren(Film)");
    },
    "46.Take a screenshot": function() {
        act.screenshot();
    },
    '47.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    },
    '48.Click span "nur Verleih-Medien"': function() {
        act.click(":containsExcludeChildren(nur VerleihMedien)");
    },
    "49.Take a screenshot": function() {
        act.screenshot();
    },
    '50.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
    } 
}
 
"@test"["Bildungsstandards_Sortieren"] = {    
    "1.Wait 5000 milliseconds": function() {
        act.wait(7e3);
    },
    '51.Click span "Suche nach..."': function() {
        act.click(":containsExcludeChildren(Suche nach Bildungsstandards Matrix)");
    },
    "52.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1)");
    },
    '53.Click span "Grundschule"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Grundschule)").eq(1);
        };
        act.click(actionTarget);
    },
    "54.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1)");
    },
    '55.Click span "Deutsch"': function() {
        act.click(":containsExcludeChildren(Deutsch)");
    },
    '56.Click span "- Klassenstufe -"': function() {
        act.click(":containsExcludeChildren(Klassenstufe)");
    },
    '57.Click span "Klasse 2"': function() {
        act.click(":containsExcludeChildren(Klasse 2)");
    },
    "58.Take a screenshot": function() {
        act.screenshot();
    },
    '59.Click span "Zurücksetzen"': function() {
        act.click(":containsExcludeChildren(Zurücksetzen)");
        } 
}
 
"@test"["Search"] = {    
    "1.Wait 5000 milliseconds": function() {
        act.wait(7e3);
    },
    "7.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },
    "1.Wait 5000 milliseconds": function() {
        act.wait(3e3);
    },
    '3.Type in span "Alkohol Am Steuer"': function() {
        var actionTarget = function() {
            return $(".cui-horizontal-layout-center.ez5-search-input-query").find(" > span:nth(0)");
        };
        act.type(actionTarget, "Alkohol Am Steuer");
    },
    "3.Press key ENTER": function() {
        act.press("enter");
    },
    '64.Click span "…weiterlesen"': function() {
        act.click(":containsExcludeChildren(weiterlesen)");
    },
    "65.Take a screenshot": function() {
        act.screenshot();
    },
    '66.Click span "weniger"': function() {
        act.click(":containsExcludeChildren(weniger)");
    },
    '67.Click span "Details"': function() {
        act.click(":containsExcludeChildren(Details)");
    },
    "68.Take a screenshot": function() {
        act.screenshot();
    },
    '69.Click span "Details"': function() {
        act.click(":containsExcludeChildren(Details)");
    },
    '70.Click span "Download"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Download)").eq(0);
        };
        act.click(actionTarget);
    },
    "71.Take a screenshot": function() {
        act.screenshot();
    },
    '72.Click span "Download"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Download)").eq(0);
        };
        act.click(actionTarget);
    },
    '73.Click span "Ausleihen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ausleihen)").eq(0);
        };
        act.click(actionTarget);
    },
    "74.Take a screenshot": function() {
        act.screenshot();
    },
    '75.Click span "Ausleihen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ausleihen)").eq(0);
        };
        act.click(actionTarget);
    }
};


"@test"["Search_Again"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },
    '3.Type in span "Alkohol Am Steuer"': function() {
        var actionTarget = function() {
            return $(".cui-horizontal-layout-center.ez5-search-input-query").find(" > span:nth(0)");
        };
        act.type(actionTarget, "Alkohol Am Steuer");
    },
    "3.Press key ENTER": function() {
        act.press("enter");
    },
    '6.Click span "Details"': function() {
        act.click(":containsExcludeChildren(Details)");
    },
    '7.Click span "Ausleihen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ausleihen)").eq(0);
        };
        act.click(actionTarget);
    },
    '8.Click span "Download"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Download)").eq(0);
        };
        act.click(actionTarget);
    }
};

